package com.example.spring.frontendmodel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class LocationModel {

    private float lat;
    private float lng;
    private String name;


    public LocationModel(){

    }

    public LocationModel(float lat, float lng, String name) {
        this.lat = lat;
        this.lng = lng;
        this.name = name;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
