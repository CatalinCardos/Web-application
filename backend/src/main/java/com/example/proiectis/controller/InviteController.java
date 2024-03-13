package com.example.proiectis.controller;


import com.example.proiectis.model.Invite;
import com.example.proiectis.service.InviteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/invite")
public class InviteController {

    @Autowired
    private InviteServiceImpl inviteService;

    @PostMapping("/addInvite")
    public Invite addInvite(@RequestBody Invite invite){
        return inviteService.addInvite(invite);
    }

    @PutMapping("/makeUsedInvite/{id}")
    public void makeUsedInvite(@PathVariable Integer id){
        inviteService.isUsed(id);
    }

    @GetMapping("/getInviteByID/{id}")
    public List<Invite> getInviteByID(@PathVariable Integer id){
        return inviteService.getInvitesById(id);
    }
}
