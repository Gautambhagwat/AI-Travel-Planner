package com.travel.maps.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;

import com.travel.maps.dto.LocationResponse;
import com.travel.maps.service.MapsService;


@Service
public class MapsServiceImpl implements MapsService {


    private final RestTemplate restTemplate;


    @Value("${nominatim.base.url}")
    private String nominatimUrl;


    public MapsServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }



    @Override
    public LocationResponse getLocation(String place) {


        String url = nominatimUrl
                + "/search?q="
                + place
                + "&format=json&limit=1";



        HttpHeaders headers = new HttpHeaders();

        headers.set(
                "User-Agent",
                "AI-Travel-Planner-Application"
        );


        HttpEntity<String> entity =
                new HttpEntity<>(headers);



        ResponseEntity<List> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.GET,
                        entity,
                        List.class
                );



        List<Map<String,Object>> locations =
                response.getBody();



        if(locations == null || locations.isEmpty()) {

            return null;
        }



        Map<String,Object> location =
                locations.get(0);



        return new LocationResponse(

                location.get("display_name").toString(),

                location.get("lat").toString(),

                location.get("lon").toString()

        );

    }

}