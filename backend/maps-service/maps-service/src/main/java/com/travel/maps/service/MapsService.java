package com.travel.maps.service;

import com.travel.maps.dto.LocationResponse;

public interface MapsService {

    LocationResponse getLocation(String place);

}