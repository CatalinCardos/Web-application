package com.example.proiectis.controller;


import com.example.proiectis.model.Team1v1;
import com.example.proiectis.model.Team5v5;
import com.example.proiectis.model.Team7v7;
import com.example.proiectis.service.ProgramServiceImpl;
import com.example.proiectis.service.TeamService;
import com.example.proiectis.service.TeamServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team")
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamServiceImpl teamService;

    @PostMapping("/team1v1/{idProgram}/player/{idPlayer}/numbersOfPlayers/{count}")
    public Team1v1 addTeam1v1(@PathVariable Integer idProgram, @PathVariable Integer idPlayer, @PathVariable Integer count){
        return teamService.savePlayer1v1(idProgram, idPlayer, count);
    }

    @PostMapping("/team5v5/{idProgram}/player/{idPlayer}/numbersOfPlayers/{count}")
    public Team5v5 addTeam5v5(@PathVariable Integer idProgram, @PathVariable Integer idPlayer, @PathVariable Integer count){
        return teamService.savePlayer5v5(idProgram, idPlayer, count);
    }

    @PostMapping("/team7v7/{idProgram}/player/{idPlayer}/numbersOfPlayers/{count}")
    public Team7v7 addTeam7v7(@PathVariable Integer idProgram, @PathVariable Integer idPlayer, @PathVariable Integer count){
        return teamService.savePlayer7v7(idProgram, idPlayer, count);
    }

    @GetMapping("/team1v1/getPlayers/{id}")
    public Team1v1 getPlayersFromRepo1v1 (@PathVariable Integer id){
        return teamService.getPlayers1v1(id);
    }

    @GetMapping("/team5v5/getPlayers/{id}")
    public Team5v5 getPlayersFromRepo5v5 (@PathVariable Integer id){
        return teamService.getPlayers5v5(id);
    }

    @GetMapping("/team7v7/getPlayers/{id}")
    public Team7v7 getPlayersFromRepo7v7 (@PathVariable Integer id){
        return teamService.getPlayers7v7(id);
    }

    @DeleteMapping("/deletePlayerID/{id}")
    public void deletePlayer(@PathVariable Integer id){
        teamService.removeID(id);
    }

    @DeleteMapping("/removeTeam1v1/{idProgram}")
    public void deleteTeam1v1(@PathVariable Integer idProgram){
        teamService.removeTeam1v1(idProgram);
    }
    @DeleteMapping("/removeTeam5v5/{idProgram}")
    public void deleteTeam5v5(@PathVariable Integer idProgram){
        teamService.removeTeam5v5(idProgram);
    }
    @DeleteMapping("/removeTeam7v7/{idProgram}")
    public void deleteTeam7v7(@PathVariable Integer idProgram){
        teamService.removeTeam7v7(idProgram);
    }
}
