package com.travel.maps.serviceimpl;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;

import com.travel.maps.dto.LocationResponse;
import com.travel.maps.service.MapsService;

@Service
public class MapsServiceImpl implements MapsService {

    private final RestTemplate restTemplate;

    // Object lock dedicated to throttling synchronization
    private final Object lock = new Object();
    private long lastRequestTime = 0;

    // Fixed: ConcurrentHashMap safely handles multiple web threads
    private final Map<String, LocationResponse> cache = new ConcurrentHashMap<>();

    @Value("${nominatim.base.url}")
    private String nominatimUrl;

    public MapsServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public LocationResponse getLocation(String place) {
        if (place == null || place.isBlank()) {
            return null;
        }

        String key = place.toLowerCase().trim();

        // 1. Thread-safe cache check
        if (cache.containsKey(key)) {
            return cache.get(key);
        }

        // 2. Fixed: Build safe, URL-encoded endpoints
        String url = UriComponentsBuilder.fromHttpUrl(nominatimUrl)
                .path("/search")
                .queryParam("q", place)
                .queryParam("format", "json")
                .queryParam("limit", "1")
                .build()
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("User-Agent", "AI-Travel-Planner-Application");
        HttpEntity<String> entity = new HttpEntity<>(headers);

        // 3. Fixed: Synchronized lock stops concurrent hits to Nominatim
        synchronized (lock) {
            try {
                long currentTime = System.currentTimeMillis();
                long elapsed = currentTime - lastRequestTime;

                if (elapsed < 1100) {
                    Thread.sleep(1100 - elapsed);
                }

                // Track time immediately BEFORE firing the request
                lastRequestTime = System.currentTimeMillis();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return null;
            }
        }

        try {
            // Raw List generic converted to wildcard to avoid compiler warnings
            ResponseEntity<List> response = restTemplate.exchange(
                    url, HttpMethod.GET, entity, List.class);

            List<Map<String, Object>> locations = response.getBody();

            if (locations == null || locations.isEmpty()) {
                return null;
            }

            Map<String, Object> location = locations.get(0);

            LocationResponse locationResponse = new LocationResponse(
                    location.get("display_name").toString(),
                    location.get("lat").toString(),
                    location.get("lon").toString()
            );

            cache.put(key, locationResponse);
            return locationResponse;

        } catch (Exception e) {
            // Proactive fallback for unexpected API structural failures or network blips
            return null;
        }
    }
}
