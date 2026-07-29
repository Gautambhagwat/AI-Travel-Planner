package com.travel.preference.entity;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="preferences")
public class Preference {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long userId;


    private String budget;


    private String travelStyle;


    @ElementCollection
    private List<String> interests;



    public Preference() {
    }



    public Preference(Long id, Long userId, String budget, String travelStyle, List<String> interests) {
        this.id = id;
        this.userId = userId;
        this.budget = budget;
        this.travelStyle = travelStyle;
        this.interests = interests;
    }



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public Long getUserId() {
        return userId;
    }


    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public String getBudget() {
        return budget;
    }


    public void setBudget(String budget) {
        this.budget = budget;
    }


    public String getTravelStyle() {
        return travelStyle;
    }


    public void setTravelStyle(String travelStyle) {
        this.travelStyle = travelStyle;
    }


    public List<String> getInterests() {
        return interests;
    }


    public void setInterests(List<String> interests) {
        this.interests = interests;
    }

}