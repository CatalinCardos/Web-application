package com.example.proiectis.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Invite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Integer idInvitePlayer;
    private Integer idPlayer;
    private Integer idField;
    private boolean isUsed;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getIdInvitePlayer() {
        return idInvitePlayer;
    }

    public void setIdInvitePlayer(Integer idInvitePlayer) {
        this.idInvitePlayer = idInvitePlayer;
    }

    public Integer getIdPlayer() {
        return idPlayer;
    }

    public void setIdPlayer(Integer idPlayer) {
        this.idPlayer = idPlayer;
    }

    public Integer getIdField() {
        return idField;
    }

    public void setIdField(Integer idField) {
        this.idField = idField;
    }

    public boolean isUsed() {
        return isUsed;
    }

    public void setUsed(boolean used) {
        isUsed = used;
    }
}
