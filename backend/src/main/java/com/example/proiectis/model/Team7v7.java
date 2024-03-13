package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team7v7 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int team1player1;
    private int team1player2;
    private int team1player3;
    private int team1player4;
    private int team1player5;
    private int team1player6;
    private int team1player7;
    private int team2player1;
    private int team2player2;
    private int team2player3;
    private int team2player4;
    private int team2player5;
    private int team2player6;
    private int team2player7;
    private int idProgram;

    public Team7v7() {

    }


    public int getId() {
        return id;
    }

    public int getTeam1player1() {
        return team1player1;
    }

    public int getTeam1player2() {
        return team1player2;
    }

    public int getTeam1player3() {
        return team1player3;
    }

    public int getTeam1player4() {
        return team1player4;
    }

    public int getTeam1player5() {
        return team1player5;
    }

    public int getTeam1player6() {
        return team1player6;
    }

    public int getTeam1player7() {
        return team1player7;
    }

    public int getTeam2player1() {
        return team2player1;
    }

    public int getTeam2player2() {
        return team2player2;
    }

    public int getTeam2player3() {
        return team2player3;
    }

    public int getTeam2player4() {
        return team2player4;
    }

    public int getTeam2player5() {
        return team2player5;
    }

    public int getTeam2player6() {
        return team2player6;
    }

    public int getTeam2player7() {
        return team2player7;
    }

    public int getIdProgram() {
        return idProgram;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTeam1player1(int team1player1) {
        this.team1player1 = team1player1;
    }

    public void setTeam1player2(int team1player2) {
        this.team1player2 = team1player2;
    }

    public void setTeam1player3(int team1player3) {
        this.team1player3 = team1player3;
    }

    public void setTeam1player4(int team1player4) {
        this.team1player4 = team1player4;
    }

    public void setTeam1player5(int team1player5) {
        this.team1player5 = team1player5;
    }

    public void setTeam1player6(int team1player6) {
        this.team1player6 = team1player6;
    }

    public void setTeam1player7(int team1player7) {
        this.team1player7 = team1player7;
    }

    public void setTeam2player1(int team2player1) {
        this.team2player1 = team2player1;
    }

    public void setTeam2player2(int team2player2) {
        this.team2player2 = team2player2;
    }

    public void setTeam2player3(int team2player3) {
        this.team2player3 = team2player3;
    }

    public void setTeam2player4(int team2player4) {
        this.team2player4 = team2player4;
    }

    public void setTeam2player5(int team2player5) {
        this.team2player5 = team2player5;
    }

    public void setTeam2player6(int team2player6) {
        this.team2player6 = team2player6;
    }

    public void setTeam2player7(int team2player7) {
        this.team2player7 = team2player7;
    }

    public void setIdProgram(int idProgram) {
        this.idProgram = idProgram;
    }

    public Team7v7(int team1player1, int team1player2, int team1player3, int team1player4, int team1player5, int team1player6, int team1player7, int team2player1, int team2player2, int team2player3, int team2player4, int team2player5, int team2player6, int team2player7, int idProgram) {
        this.team1player1 = team1player1;
        this.team1player2 = team1player2;
        this.team1player3 = team1player3;
        this.team1player4 = team1player4;
        this.team1player5 = team1player5;
        this.team1player6 = team1player6;
        this.team1player7 = team1player7;
        this.team2player1 = team2player1;
        this.team2player2 = team2player2;
        this.team2player3 = team2player3;
        this.team2player4 = team2player4;
        this.team2player5 = team2player5;
        this.team2player6 = team2player6;
        this.team2player7 = team2player7;
        this.idProgram = idProgram;
    }
}
