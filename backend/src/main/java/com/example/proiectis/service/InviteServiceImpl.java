package com.example.proiectis.service;

import com.example.proiectis.model.Invite;
import com.example.proiectis.repository.InviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InviteServiceImpl implements InviteService{

    @Autowired
    private InviteRepository inviteRepository;

    @Override
    public Invite addInvite(Invite invite) {
        return inviteRepository.save(invite);
    }

    @Override
    public void isUsed(Integer id) {
        Invite invite = inviteRepository.findById(id).orElse(null);
        if (invite != null){
            invite.setUsed(true);
        }
        inviteRepository.save(invite);
    }

    @Override
    public List<Invite> getInvitesById(Integer id) {
        return inviteRepository.findAll().stream().filter(x -> x.getIdInvitePlayer() == id).toList();
    }
}
