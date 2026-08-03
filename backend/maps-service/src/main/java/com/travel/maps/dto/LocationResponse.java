package com.travel.maps.dto;

public class LocationResponse {

    private String displayName;
    private String latitude;
    private String longitude;


    public LocationResponse() {
    }


    public LocationResponse(String displayName, String latitude, String longitude) {
        this.displayName = displayName;
        this.latitude = latitude;
        this.longitude = longitude;
    }


    public String getDisplayName() {
        return displayName;
    }


    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }


    public String getLatitude() {
        return latitude;
    }


    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }


    public String getLongitude() {
        return longitude;
    }


    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
}