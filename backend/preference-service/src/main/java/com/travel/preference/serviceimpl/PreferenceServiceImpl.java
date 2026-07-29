package com.travel.preference.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.preference.entity.Preference;
import com.travel.preference.repository.PreferenceRepository;
import com.travel.preference.service.PreferenceService;

@Service
public class PreferenceServiceImpl implements PreferenceService {

    @Autowired
    private PreferenceRepository preferenceRepository;

    @Override
    public Preference getPreferences(Long userId) {

        return preferenceRepository.findByUserId(userId);
    }

    @Override
    public Preference updatePreferences(Long userId, Preference preference) {

        Preference existingPreference = preferenceRepository.findByUserId(userId);

        if (existingPreference == null) {
            preference.setUserId(userId);
            return preferenceRepository.save(preference);
        }

        existingPreference.setBudget(preference.getBudget());
        existingPreference.setTravelStyle(preference.getTravelStyle());
        existingPreference.setInterests(preference.getInterests());

        return preferenceRepository.save(existingPreference);
    }
}