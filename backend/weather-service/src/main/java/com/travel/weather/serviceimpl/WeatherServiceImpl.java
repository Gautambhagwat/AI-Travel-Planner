package com.travel.weather.serviceimpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.travel.weather.dto.WeatherResponse;
import com.travel.weather.service.WeatherService;


@Service
public class WeatherServiceImpl implements WeatherService {


    private final RestTemplate restTemplate;


    @Value("${openmeteo.base.url}")
    private String weatherUrl;



    @Value("${maps.service.url}")
    private String mapsUrl;



    public WeatherServiceImpl(RestTemplate restTemplate){

        this.restTemplate = restTemplate;

    }



    @Override
    public WeatherResponse getWeather(String place){


        String mapsApi =
                mapsUrl +
                "/maps/location?place=" +
                place;



        Map location =
                restTemplate.getForObject(
                        mapsApi,
                        Map.class
                );


        double latitude =
                Double.parseDouble(
                        location.get("latitude").toString()
                );


        double longitude =
                Double.parseDouble(
                        location.get("longitude").toString()
                );



        String url =
                weatherUrl +
                "/forecast?latitude=" +
                latitude +
                "&longitude=" +
                longitude +
                "&current=temperature_2m,weather_code";



        Map response =
                restTemplate.getForObject(
                        url,
                        Map.class
                );


        Map current =
                (Map) response.get("current");



        double temperature =
                Double.parseDouble(
                        current.get("temperature_2m").toString()
                );



        int weatherCode =
                Integer.parseInt(
                        current.get("weather_code").toString()
                );



        return new WeatherResponse(
                place,
                latitude,
                longitude,
                temperature,
                weatherCode
        );

    }

}