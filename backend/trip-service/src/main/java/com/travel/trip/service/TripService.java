package com.travel.trip.service;

import java.util.List;

import com.travel.trip.dto.TripRequest;
import com.travel.trip.dto.TripResponse;

public interface TripService {

    TripResponse createTrip(TripRequest request);

    TripResponse updateTrip(Long id, TripRequest request);

    List<TripResponse> getAllTrips();

    TripResponse getTripById(Long id);

    void deleteTrip(Long id);
}