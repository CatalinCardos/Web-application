package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team1v1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int firstPlayer;
    private int secondPlayer;
    private int idProgram;

    public Team1v1(int firstPlayer, int secondPlayer, int idProgram) {
        this.firstPlayer = firstPlayer;
        this.secondPlayer = secondPlayer;
        this.idProgram = idProgram;
    }

    public Team1v1() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFirstPlayer() {
        return firstPlayer;
    }

    public void setFirstPlayer(int firstPlayer) {
        this.firstPlayer = firstPlayer;
    }

    public int getSecondPlayer() {
        return secondPlayer;
    }

    public void setSecondPlayer(int secondPlayer) {
        this.secondPlayer = secondPlayer;
    }

    public int getIdProgram() {
        return idProgram;
    }

    public void setIdProgram(int idProgram) {
        this.idProgram = idProgram;
    }
}
