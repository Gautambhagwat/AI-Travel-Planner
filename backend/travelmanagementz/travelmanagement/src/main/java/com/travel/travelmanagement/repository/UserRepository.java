package com.travel.travelmanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.travelmanagement.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
Optional<Users> findByEmail(String email);
}
