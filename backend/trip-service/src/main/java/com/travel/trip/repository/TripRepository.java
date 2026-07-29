package com.travel.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.trip.entity.Trip;

public interface TripRepository extends JpaRepository<Trip, Long> {

}