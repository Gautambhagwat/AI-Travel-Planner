package com.travel.destination.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.destination.entity.Destination;


public interface DestinationRepository
        extends JpaRepository<Destination, Long> {


    List<Destination> findByCityContainingIgnoreCase(String city);

}