package com.travel.trip.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.travel.trip.dto.TripRequest;
import com.travel.trip.dto.TripResponse;
import com.travel.trip.service.TripService;

@RestController
@RequestMapping("/trips")
public class TripController {

    @Autowired
    private TripService tripService;

    @GetMapping
    public List<TripResponse> getAllTrips() {
        return tripService.getAllTrips();
    }

    @GetMapping("/user/{userId}")
    public List<TripResponse> getTripsByUserId(
            @PathVariable Long userId) {

        return tripService.getTripsByUserId(userId);
    }

    @GetMapping("/{id}")
    public TripResponse getTripById(@PathVariable Long id) {
        return tripService.getTripById(id);
    }

    @PostMapping
    public TripResponse createTrip(@RequestBody TripRequest request) {
        return tripService.createTrip(request);
    }

    @PutMapping("/{id}")
    public TripResponse updateTrip(@PathVariable Long id,
                                   @RequestBody TripRequest request) {

        return tripService.updateTrip(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteTrip(@PathVariable Long id) {

        tripService.deleteTrip(id);

        return "Trip deleted successfully";
    }
}