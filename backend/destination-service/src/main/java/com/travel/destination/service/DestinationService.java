package com.travel.destination.service;

import java.util.List;

import com.travel.destination.dto.DestinationRequest;
import com.travel.destination.dto.DestinationResponse;

public interface DestinationService {

    DestinationResponse createDestination(DestinationRequest request);

    DestinationResponse updateDestination(Long id, DestinationRequest request);

    List<DestinationResponse> getAllDestinations();

    DestinationResponse getDestinationById(Long id);

    List<DestinationResponse> searchByCity(String city);

    void deleteDestination(Long id);

}