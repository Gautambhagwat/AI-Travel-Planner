package com.travel.trip.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.trip.entity.Trip;

public interface TripRepository extends JpaRepository<Trip, Long> {

    List<Trip> findByUserId(Long userId);

}