package com.travel.destination.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.destination.dto.DestinationRequest;
import com.travel.destination.dto.DestinationResponse;
import com.travel.destination.entity.Destination;
import com.travel.destination.repository.DestinationRepository;
import com.travel.destination.service.DestinationService;


@Service
public class DestinationServiceImpl implements DestinationService {


    @Autowired
    private DestinationRepository destinationRepository;


    @Override
    public DestinationResponse createDestination(DestinationRequest request) {

        Destination destination = new Destination();

        destination.setName(request.getName());
        destination.setCity(request.getCity());
        destination.setCountry(request.getCountry());
        destination.setDescription(request.getDescription());
        destination.setPrice(request.getPrice());
        destination.setImageUrl(request.getImageUrl());
        destination.setDays(request.getDays());
        destination.setRating(request.getRating());


        Destination savedDestination =
                destinationRepository.save(destination);


        return convertToResponse(savedDestination);
    }



    @Override
    public DestinationResponse updateDestination(Long id,
            DestinationRequest request) {


        Destination destination =
                destinationRepository.findById(id)
                .orElseThrow(
                () -> new RuntimeException("Destination not found")
                );


        destination.setName(request.getName());
        destination.setCity(request.getCity());
        destination.setCountry(request.getCountry());
        destination.setDescription(request.getDescription());
        destination.setPrice(request.getPrice());
        destination.setImageUrl(request.getImageUrl());
        destination.setDays(request.getDays());
        destination.setRating(request.getRating());


        Destination updated =
                destinationRepository.save(destination);


        return convertToResponse(updated);
    }



    @Override
    public List<DestinationResponse> getAllDestinations() {

        return destinationRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }



    @Override
    public DestinationResponse getDestinationById(Long id) {


        Destination destination =
                destinationRepository.findById(id)
                .orElseThrow(
                () -> new RuntimeException("Destination not found")
                );


        return convertToResponse(destination);
    }



    @Override
    public List<DestinationResponse> searchByCity(String city) {


        return destinationRepository.findByCity(city)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }



    @Override
    public void deleteDestination(Long id) {

        destinationRepository.deleteById(id);

    }



    private DestinationResponse convertToResponse(
            Destination destination) {


        DestinationResponse response =
                new DestinationResponse();


        response.setId(destination.getId());
        response.setName(destination.getName());
        response.setCity(destination.getCity());
        response.setCountry(destination.getCountry());
        response.setDescription(destination.getDescription());
        response.setPrice(destination.getPrice());
        response.setImageUrl(destination.getImageUrl());
        response.setDays(destination.getDays());
        response.setRating(destination.getRating());


        return response;
    }

}