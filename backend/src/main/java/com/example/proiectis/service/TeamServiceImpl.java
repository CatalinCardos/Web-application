package com.example.proiectis.service;

import com.example.proiectis.model.Program;
import com.example.proiectis.model.Team1v1;
import com.example.proiectis.model.Team5v5;
import com.example.proiectis.model.Team7v7;
import com.example.proiectis.repository.ProgramRepository;
import com.example.proiectis.repository.Team1v1Repository;
import com.example.proiectis.repository.Team5v5Repository;
import com.example.proiectis.repository.Team7v7Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Controller
public class TeamServiceImpl implements TeamService {

    @Autowired
    private Team1v1Repository team1v1Repository;

    @Autowired
    private Team5v5Repository team5v5Repository;

    @Autowired
    private Team7v7Repository team7v7Repository;

    @Autowired
    private ProgramRepository programRepository;

    @Override
    public Team1v1 savePlayer1v1(Integer idProgram, Integer idPlayer, Integer count) {
        Team1v1 team1v1 = team1v1Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);

        if (team1v1 != null) {
            if (count == 0)
                team1v1.setFirstPlayer(idPlayer);
            else
                team1v1.setSecondPlayer(idPlayer);
        }
        return team1v1Repository.save(team1v1);
    }

    @Override
    public Team5v5 savePlayer5v5(Integer idProgram, Integer idPlayer, Integer count) {
        Team5v5 team5v5 = team5v5Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);

        if (team5v5 != null) {
            if (count == 0) {
                team5v5.setTeam1player1(idPlayer);
            } else if (count == 1) {
                team5v5.setTeam1player2(idPlayer);
            } else if (count == 2) {
                team5v5.setTeam1player3(idPlayer);
            } else if (count == 3) {
                team5v5.setTeam1player4(idPlayer);
            } else if (count == 4) {
                team5v5.setTeam1player5(idPlayer);
            } else if (count == 5) {
                team5v5.setTeam2player1(idPlayer);
            } else if (count == 6) {
                team5v5.setTeam2player2(idPlayer);
            } else if (count == 7) {
                team5v5.setTeam2player3(idPlayer);
            } else if (count == 8) {
                team5v5.setTeam2player4(idPlayer);
            } else if (count == 9) {
                team5v5.setTeam2player5(idPlayer);
            }
        }
        return team5v5Repository.save(team5v5);
    }

    @Override
    public Team7v7 savePlayer7v7(Integer idProgram, Integer idPlayer, Integer count) {
        System.out.println(idProgram);
        System.out.println(idPlayer);
        System.out.println(count);
        Team7v7 team7v7 = team7v7Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);

        if (team7v7 != null) {
            if (count == 0) {
                team7v7.setTeam1player1(idPlayer);
            } else if (count == 1) {
                team7v7.setTeam1player2(idPlayer);
            } else if (count == 2) {
                team7v7.setTeam1player3(idPlayer);
            } else if (count == 3) {
                team7v7.setTeam1player4(idPlayer);
            } else if (count == 4) {
                team7v7.setTeam1player5(idPlayer);
            } else if (count == 5) {
                team7v7.setTeam1player6(idPlayer);
            } else if (count == 6) {
                team7v7.setTeam1player7(idPlayer);
            } else if (count == 7) {
                team7v7.setTeam2player1(idPlayer);
            } else if (count == 8) {
                team7v7.setTeam2player2(idPlayer);
            } else if (count == 9) {
                team7v7.setTeam2player3(idPlayer);
            } else if (count == 10) {
                team7v7.setTeam2player4(idPlayer);
            } else if (count == 11) {
                team7v7.setTeam2player5(idPlayer);
            } else if (count == 12) {
                team7v7.setTeam2player6(idPlayer);
            } else if (count == 13) {
                team7v7.setTeam2player7(idPlayer);
            }
        }
        return team7v7Repository.save(team7v7);
    }

    @Override
    public Team1v1 getPlayers1v1(Integer idProgram) {
        return team1v1Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);
    }

    @Override
    public Team5v5 getPlayers5v5(Integer idProgram) {
        return team5v5Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);
    }

    @Override
    public Team7v7 getPlayers7v7(Integer idProgram) {
        return team7v7Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).findFirst().orElse(null);
    }

    @Override
    public void removeTeam1v1(Integer idProgram) {
        List<Team1v1> team1v1s = team1v1Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).toList();
        team1v1Repository.deleteAll(team1v1s);

    }

    @Override
    public void removeTeam5v5(Integer idProgram) {
        List<Team5v5> team5v5s = team5v5Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).toList();
        team5v5Repository.deleteAll(team5v5s);
    }

    @Override
    public void removeTeam7v7(Integer idProgram) {
        List<Team7v7> team7v7s = team7v7Repository.findAll().stream().filter(x -> x.getIdProgram() == idProgram).toList();
        team7v7Repository.deleteAll(team7v7s);
    }

    @Override
    public void removeID(Integer id) {
        List<Team1v1> team1v1s = team1v1Repository.findAll().stream().filter(x -> x.getFirstPlayer() == id || x.getSecondPlayer() == id).toList();
        List<Team5v5> team5v5s = team5v5Repository.findAll().stream().filter(x -> x.getTeam1player1() == id ||
                x.getTeam1player2() == id || x.getTeam1player3() == id || x.getTeam1player4() == id || x.getTeam1player5() == id ||
                x.getTeam2player1() == id || x.getTeam2player2() == id || x.getTeam2player3() == id || x.getTeam2player4() == id ||
                x.getTeam2player5() == id).toList();
        List<Team7v7> team7v7s = team7v7Repository.findAll().stream().filter(x -> x.getTeam1player1() == id ||
                x.getTeam1player2() == id || x.getTeam1player3() == id || x.getTeam1player4() == id || x.getTeam1player5() == id ||
                x.getTeam1player7() == id || x.getTeam1player6() == id || x.getTeam2player1() == id || x.getTeam2player2() == id ||
                x.getTeam2player3() == id || x.getTeam2player4() == id || x.getTeam2player5() == id || x.getTeam2player6() == id ||
                x.getTeam2player7() == id).toList();

        if(team1v1s.size() > 0){
            for (Team1v1 team: team1v1s) {
                Program program = programRepository.findById(team.getIdProgram()).orElse(null);
                if(program != null){
                    List<Integer> player = new ArrayList<>();
                    player.add(team.getFirstPlayer());
                    player.add(team.getSecondPlayer());
                    player.remove(Integer.valueOf(id));
                    program.setCapacity(program.getCapacity() - 1);
                    player.add(3);
                    team.setFirstPlayer(player.get(0));
                    team.setSecondPlayer(player.get(1));
                    team1v1Repository.save(team);
                    programRepository.save(program);
                }
            }
        }
        if(team5v5s.size() > 0){
            for (Team5v5 team: team5v5s) {
                Program program5v5 = programRepository.findById(team.getIdProgram()).orElse(null);
                if(program5v5 != null){
                    List<Integer> player = new ArrayList<>();
                    player.add(team.getTeam1player1());
                    player.add(team.getTeam1player2());
                    player.add(team.getTeam1player3());
                    player.add(team.getTeam1player4());
                    player.add(team.getTeam1player5());
                    player.add(team.getTeam2player1());
                    player.add(team.getTeam2player2());
                    player.add(team.getTeam2player3());
                    player.add(team.getTeam2player4());
                    player.add(team.getTeam2player5());
                    player.remove(Integer.valueOf(id));
                    player.add(3);
                    program5v5.setCapacity(program5v5.getCapacity() - 1);
                    team.setTeam1player1(player.get(0));
                    team.setTeam1player2(player.get(1));
                    team.setTeam1player3(player.get(2));
                    team.setTeam1player4(player.get(3));
                    team.setTeam1player5(player.get(4));
                    team.setTeam2player1(player.get(5));
                    team.setTeam2player2(player.get(6));
                    team.setTeam2player3(player.get(7));
                    team.setTeam2player4(player.get(8));
                    team.setTeam2player5(player.get(9));
                    team5v5Repository.save(team);
                    programRepository.save(program5v5);
                }
            }
        }
        if(team7v7s.size() > 0){
            for (Team7v7 team: team7v7s) {
                Program program7v7 = programRepository.findById(team.getIdProgram()).orElse(null);
                if(program7v7 != null){
                    List<Integer> player = new ArrayList<>();
                    player.add(team.getTeam1player1());
                    player.add(team.getTeam1player2());
                    player.add(team.getTeam1player3());
                    player.add(team.getTeam1player4());
                    player.add(team.getTeam1player5());
                    player.add(team.getTeam1player6());
                    player.add(team.getTeam1player7());
                    player.add(team.getTeam2player1());
                    player.add(team.getTeam2player2());
                    player.add(team.getTeam2player3());
                    player.add(team.getTeam2player4());
                    player.add(team.getTeam2player5());
                    player.add(team.getTeam2player6());
                    player.add(team.getTeam2player7());
                    player.remove(Integer.valueOf(id));
                    player.add(3);
                    program7v7.setCapacity(program7v7.getCapacity() - 1);
                    team.setTeam1player1(player.get(0));
                    team.setTeam1player2(player.get(1));
                    team.setTeam1player3(player.get(2));
                    team.setTeam1player4(player.get(3));
                    team.setTeam1player5(player.get(4));
                    team.setTeam1player6(player.get(5));
                    team.setTeam1player7(player.get(6));
                    team.setTeam2player1(player.get(7));
                    team.setTeam2player2(player.get(8));
                    team.setTeam2player3(player.get(9));
                    team.setTeam2player4(player.get(10));
                    team.setTeam2player5(player.get(11));
                    team.setTeam2player6(player.get(12));
                    team.setTeam2player7(player.get(13));
                    team7v7Repository.save(team);
                    programRepository.save(program7v7);
                }
            }
        }
    }
}
