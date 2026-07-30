package com.travel.weather.controller;


import org.springframework.web.bind.annotation.*;

import com.travel.weather.dto.WeatherResponse;
import com.travel.weather.service.WeatherService;



@RestController
@RequestMapping("/weather")
public class WeatherController {


    private final WeatherService weatherService;



    public WeatherController(WeatherService weatherService){

        this.weatherService = weatherService;

    }



    @GetMapping
    public WeatherResponse getWeather(
            @RequestParam String place
    ){

        return weatherService.getWeather(place);

    }

}