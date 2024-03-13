package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String street;
    private int beginHour;
    private int finalHour;
    private String type;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStreet() {
        return street;
    }

    public int getBeginHour() {
        return beginHour;
    }

    public int getFinalHour() {
        return finalHour;
    }

    public String getType() {
        return type;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setBeginHour(int beginHour) {
        this.beginHour = beginHour;
    }

    public void setFinalHour(int finalHour) {
        this.finalHour = finalHour;
    }

    public void setType(String type) {
        this.type = type;
    }
}
