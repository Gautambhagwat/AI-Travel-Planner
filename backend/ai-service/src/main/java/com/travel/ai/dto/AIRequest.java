package com.travel.ai.dto;

import java.util.List;

public class AIRequest {


    private String destination;

    private Integer days;

    private Double budget;

    private List<String> interests;


    public String getDestination() {
        return destination;
    }


    public void setDestination(String destination) {
        this.destination = destination;
    }


    public Integer getDays() {
        return days;
    }


    public void setDays(Integer days) {
        this.days = days;
    }


    public Double getBudget() {
        return budget;
    }


    public void setBudget(Double budget) {
        this.budget = budget;
    }


    public List<String> getInterests() {
        return interests;
    }


    public void setInterests(List<String> interests) {
        this.interests = interests;
    }
}