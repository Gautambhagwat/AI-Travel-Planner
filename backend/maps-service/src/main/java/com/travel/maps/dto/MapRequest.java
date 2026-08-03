package com.travel.maps.dto;

public class MapRequest {

    private String place;

    public MapRequest() {
    }

    public MapRequest(String place) {
        this.place = place;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}