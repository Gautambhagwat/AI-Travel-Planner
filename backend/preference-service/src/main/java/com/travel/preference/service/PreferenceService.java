package com.travel.preference.service;

import com.travel.preference.entity.Preference;

public interface PreferenceService {

    Preference getPreferences(Long userId);

    Preference updatePreferences(Long userId, Preference preference);

}