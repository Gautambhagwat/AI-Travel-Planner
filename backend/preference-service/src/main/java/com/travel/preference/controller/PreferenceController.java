package com.travel.preference.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.travel.preference.entity.Preference;
import com.travel.preference.service.PreferenceService;

@RestController
@RequestMapping("/preferences")
public class PreferenceController {

    @Autowired
    private PreferenceService preferenceService;

    // GET /preferences?userId=1
    @GetMapping
    public ResponseEntity<Preference> getPreferences(@RequestParam Long userId) {
        return ResponseEntity.ok(preferenceService.getPreferences(userId));
    }

    // PUT /preferences?userId=1
    @PutMapping
    public ResponseEntity<Preference> updatePreferences(
            @RequestParam Long userId,
            @RequestBody Preference preference) {

        return ResponseEntity.ok(preferenceService.updatePreferences(userId, preference));
    }
}