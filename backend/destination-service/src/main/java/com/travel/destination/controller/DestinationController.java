package com.travel.destination.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.travel.destination.dto.DestinationRequest;
import com.travel.destination.dto.DestinationResponse;
import com.travel.destination.service.DestinationService;

@RestController
@RequestMapping("/destinations")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @GetMapping
    public List<DestinationResponse> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    @GetMapping("/{id}")
    public DestinationResponse getDestinationById(@PathVariable Long id) {
        return destinationService.getDestinationById(id);
    }

    @GetMapping("/search")
    public List<DestinationResponse> searchDestination(@RequestParam String city) {
        return destinationService.searchByCity(city);
    }

    @PostMapping
    public DestinationResponse createDestination(@RequestBody DestinationRequest request) {
        return destinationService.createDestination(request);
    }

    @PutMapping("/{id}")
    public DestinationResponse updateDestination(
            @PathVariable Long id,
            @RequestBody DestinationRequest request) {

        return destinationService.updateDestination(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteDestination(@PathVariable Long id) {

        destinationService.deleteDestination(id);

        return "Destination deleted successfully";
    }
}