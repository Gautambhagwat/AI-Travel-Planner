package com.travel.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
