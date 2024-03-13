package com.example.proiectis.service;

import com.example.proiectis.model.Invite;

import java.util.List;

public interface InviteService {
    Invite addInvite(Invite invite);
    void isUsed(Integer id);
    List<Invite> getInvitesById(Integer id);
}
