package com.travel.maps.controller;

import org.springframework.web.bind.annotation.*;

import com.travel.maps.dto.LocationResponse;
import com.travel.maps.service.MapsService;


@RestController
@RequestMapping("/maps")
public class MapsController {


    private final MapsService mapsService;


    public MapsController(MapsService mapsService) {
        this.mapsService = mapsService;
    }



    @GetMapping("/location")
    public LocationResponse getLocation(
            @RequestParam String place) {


        return mapsService.getLocation(place);
    }

}