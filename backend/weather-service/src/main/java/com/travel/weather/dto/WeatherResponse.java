package com.travel.weather.dto;

public class WeatherResponse {

    private String place;
    private double latitude;
    private double longitude;
    private double temperature;
    private int weatherCode;


    public WeatherResponse() {

    }


    public WeatherResponse(
            String place,
            double latitude,
            double longitude,
            double temperature,
            int weatherCode
    ) {

        this.place = place;
        this.latitude = latitude;
        this.longitude = longitude;
        this.temperature = temperature;
        this.weatherCode = weatherCode;

    }


    public String getPlace() {
        return place;
    }


    public void setPlace(String place) {
        this.place = place;
    }


    public double getLatitude() {
        return latitude;
    }


    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }


    public double getLongitude() {
        return longitude;
    }


    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }


    public double getTemperature() {
        return temperature;
    }


    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }


    public int getWeatherCode() {
        return weatherCode;
    }


    public void setWeatherCode(int weatherCode) {
        this.weatherCode = weatherCode;
    }

}