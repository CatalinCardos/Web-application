package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
@Entity
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int idField;
    private int beginHour;
    private int finalHour;
    private Date date;
    private int capacity;

    public Program(int idField, int beginHour, int finalHour, Date date, int capacity) {
        this.idField = idField;
        this.beginHour = beginHour;
        this.finalHour = finalHour;
        this.date = date;
        this.capacity = capacity;
    }

    public Program() {

    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdField() {
        return idField;
    }

    public void setIdField(int idField) {
        this.idField = idField;
    }

    public int getBeginHour() {
        return beginHour;
    }

    public void setBeginHour(int beginHour) {
        this.beginHour = beginHour;
    }

    public int getFinalHour() {
        return finalHour;
    }

    public void setFinalHour(int finalHour) {
        this.finalHour = finalHour;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
