package com.travel.trip.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.trip.dto.TripRequest;
import com.travel.trip.dto.TripResponse;
import com.travel.trip.entity.Trip;
import com.travel.trip.repository.TripRepository;
import com.travel.trip.service.TripService;

@Service
public class TripServiceImpl implements TripService {

    @Autowired
    private TripRepository tripRepository;

    @Override
    public TripResponse createTrip(TripRequest request) {

        Trip trip = new Trip();

        trip.setUserId(request.getUserId());
        trip.setDestinationId(request.getDestinationId());
        trip.setTripName(request.getTripName());
        trip.setStartDate(request.getStartDate());
        trip.setEndDate(request.getEndDate());
        trip.setNumberOfPeople(request.getNumberOfPeople());
        trip.setTotalPrice(request.getTotalPrice());
        trip.setStatus(request.getStatus());

        Trip savedTrip = tripRepository.save(trip);

        return convertToResponse(savedTrip);
    }

    @Override
    public TripResponse updateTrip(Long id, TripRequest request) {

        Trip trip = tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));

        trip.setUserId(request.getUserId());
        trip.setDestinationId(request.getDestinationId());
        trip.setTripName(request.getTripName());
        trip.setStartDate(request.getStartDate());
        trip.setEndDate(request.getEndDate());
        trip.setNumberOfPeople(request.getNumberOfPeople());
        trip.setTotalPrice(request.getTotalPrice());
        trip.setStatus(request.getStatus());

        Trip updatedTrip = tripRepository.save(trip);

        return convertToResponse(updatedTrip);
    }

    @Override
    public List<TripResponse> getAllTrips() {

        return tripRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public TripResponse getTripById(Long id) {

        Trip trip = tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));

        return convertToResponse(trip);
    }

    @Override
    public void deleteTrip(Long id) {

        tripRepository.deleteById(id);
    }

    private TripResponse convertToResponse(Trip trip) {

        TripResponse response = new TripResponse();

        response.setId(trip.getId());
        response.setUserId(trip.getUserId());
        response.setDestinationId(trip.getDestinationId());
        response.setTripName(trip.getTripName());
        response.setStartDate(trip.getStartDate());
        response.setEndDate(trip.getEndDate());
        response.setNumberOfPeople(trip.getNumberOfPeople());
        response.setTotalPrice(trip.getTotalPrice());
        response.setStatus(trip.getStatus());

        return response;
    }
}