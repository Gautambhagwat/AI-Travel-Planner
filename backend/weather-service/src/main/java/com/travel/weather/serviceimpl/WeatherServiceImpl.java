package com.travel.weather.serviceimpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.travel.weather.dto.WeatherResponse;
import com.travel.weather.service.WeatherService;


@Service
public class WeatherServiceImpl implements WeatherService {


    private final RestTemplate loadBalancedRestTemplate;
    private final RestTemplate externalRestTemplate;


    @Value("${openmeteo.base.url}")
    private String weatherUrl;


    @Value("${maps.service.url}")
    private String mapsUrl;



    public WeatherServiceImpl(
            @Qualifier("loadBalancedRestTemplate") RestTemplate loadBalancedRestTemplate,
            @Qualifier("externalRestTemplate") RestTemplate externalRestTemplate
    ){

        this.loadBalancedRestTemplate = loadBalancedRestTemplate;
        this.externalRestTemplate = externalRestTemplate;

    }



    @Override
    public WeatherResponse getWeather(String place){


        String mapsApi =
                mapsUrl +
                        "/maps/location?place=" +
                        place;



        Map location =
                loadBalancedRestTemplate.getForObject(
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
                        "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code";



        Map response =
                externalRestTemplate.getForObject(
                        url,
                        Map.class
                );



        Map current =
                (Map) response.get("current");



        double temperature =
                Double.parseDouble(
                        current.get("temperature_2m").toString()
                );



        int humidity =
                Integer.parseInt(
                        current.get("relative_humidity_2m").toString()
                );



        double windSpeed =
                Double.parseDouble(
                        current.get("wind_speed_10m").toString()
                );



        int weatherCode =
                Integer.parseInt(
                        current.get("weather_code").toString()
                );


        String advice = getWeatherDescription(weatherCode);



        return new WeatherResponse(
                place,
                latitude,
                longitude,
                temperature,
                weatherCode,
                humidity,
                windSpeed,
                advice
        );

    }




    private String getWeatherDescription(int code) {

        return switch(code) {

            case 0 ->
                    "Clear Sky";

            case 1, 2, 3 ->
                    "Partly Cloudy";

            case 45, 48 ->
                    "Foggy";

            case 51, 53, 55 ->
                    "Light Rain";

            case 61, 63, 65 ->
                    "Rain";

            case 71, 73, 75 ->
                    "Snow";

            case 80, 81, 82 ->
                    "Rain Showers";

            case 95, 96, 99 ->
                    "Thunderstorm";

            default ->
                    "Unknown Weather";
        };

    }

}