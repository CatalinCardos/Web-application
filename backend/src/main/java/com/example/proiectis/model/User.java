package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int idutil;
    private String lastName;
    private String firstName;
    private String county;
    private String city;
    private String address;
    private String favoriteSport;
    private float rating;
    private boolean knowsFootball;
    private boolean knowsBasket;
    private boolean knowsTennis;
    private boolean knowsHandball;
    private String role;


    public User(int id, int idutil, String lastName, String firstName, String county, String city, String address, String favoriteSport, float rating, boolean knowsFootball, boolean knowsBasket, boolean knowsTennis, boolean knowsHandball, String role) {
        this.id = id;
        this.idutil = idutil;
        this.lastName = lastName;
        this.firstName = firstName;
        this.county = county;
        this.city = city;
        this.address = address;
        this.favoriteSport = favoriteSport;
        this.rating = rating;
        this.knowsFootball = knowsFootball;
        this.knowsBasket = knowsBasket;
        this.knowsTennis = knowsTennis;
        this.knowsHandball = knowsHandball;
        this.role = role;
    }

    public User() {

    }

    public boolean isKnowsHandball() {
        return knowsHandball;
    }

    public String getRole() {
        return role;
    }

    public int getId() {
        return id;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setFavoriteSport(String favoriteSport) {
        this.favoriteSport = favoriteSport;
    }

    public void setKnowsHandball(boolean knowsHandball) {
        this.knowsHandball = knowsHandball;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdutil() {
        return idutil;
    }

    public void setIdutil(int idutil) {
        this.idutil = idutil;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getfavoriteSport() {
        return favoriteSport;
    }


    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public boolean isKnowsFootball() {
        return knowsFootball;
    }

    public void setKnowsFootball(boolean knowsFootball) {
        this.knowsFootball = knowsFootball;
    }

    public boolean isKnowsBasket() {
        return knowsBasket;
    }

    public void setKnowsBasket(boolean knowsBasket) {
        this.knowsBasket = knowsBasket;
    }

    public boolean isKnowsTennis() {
        return knowsTennis;
    }

    public void setKnowsTennis(boolean knowsTennis) {
        this.knowsTennis = knowsTennis;
    }

}
