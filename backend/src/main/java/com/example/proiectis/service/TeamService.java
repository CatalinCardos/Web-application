package com.example.proiectis.service;

import com.example.proiectis.model.Team1v1;
import com.example.proiectis.model.Team5v5;
import com.example.proiectis.model.Team7v7;

public interface TeamService {
    Team1v1 savePlayer1v1(Integer idProgram, Integer idPlayer, Integer count);

    Team5v5 savePlayer5v5(Integer idProgram, Integer idPlayer, Integer count);
    Team7v7 savePlayer7v7(Integer idProgram, Integer idPlayer, Integer count);
    Team1v1 getPlayers1v1(Integer idProgram);
    Team5v5 getPlayers5v5(Integer idProgram);
    Team7v7 getPlayers7v7(Integer idProgram);
    void removeTeam1v1(Integer idProgram);
    void removeTeam5v5(Integer idProgram);
    void removeTeam7v7(Integer idProgram);
    void removeID(Integer id);

}
