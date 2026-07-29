package com.travel.preference.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travel.preference.entity.Preference;

public interface PreferenceRepository extends JpaRepository<Preference, Long> {

    Preference findByUserId(Long userId);

}