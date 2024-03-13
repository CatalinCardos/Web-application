package com.example.proiectis.service;


import com.example.proiectis.model.*;
import com.example.proiectis.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FieldServiceImpl implements FieldService{

    @Autowired
    private FieldRepository fieldRepository;

    @Autowired
    private Team1v1Repository team1v1Repository;
    @Autowired
    private Team7v7Repository team7v7Repository;
    @Autowired
    private Team5v5Repository team5v5Repository;
    @Autowired
    private ProgramRepository programRepository;

    @Override
    public Field addField(Field field) throws ParseException {
        Field field1 = fieldRepository.save(field);
        for(int i = field.getBeginHour(); i < field.getFinalHour(); i++){
            SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
            Date date = formatter.parse("30-12-2023");
            Program program = new Program(field1.getId(),i,i + 1,date,0);
            Program auxProgram = programRepository.save(program);
            if(Objects.equals(field1.getType(), "Football") || Objects.equals(field1.getType(), "Handball")){
                Team7v7 team7v7 = new Team7v7(3,3,3,3,3,3,
                        3,3,3,3,3,3,3,3,
                        auxProgram.getId());
                team7v7Repository.save(team7v7);
            }else if(Objects.equals(field1.getType(), "Basket")){
                Team5v5 team5v5 = new Team5v5(3,3,3,3,3,3,
                        3,3,3,3,auxProgram.getId());
                team5v5Repository.save(team5v5);
            }else if(Objects.equals(field1.getType(), "Tennis")){
                Team1v1 team1v1 = new Team1v1(3,3,auxProgram.getId());
                team1v1Repository.save(team1v1);
            }
        }
        return field1;
    }

    @Override
    public List<Field> getAllFields() {
        return fieldRepository.findAll();
    }

    @Override
    public List<Field> getFootballFields() {
        System.out.println(fieldRepository.findAll());
        return fieldRepository.findAll().stream().filter(x -> x.getType().equals("Football")).collect(Collectors.toList());
    }

    @Override
    public List<Field> getBascketFields() {
        return fieldRepository.findAll().stream().filter(x -> x.getType().equals("Basket")).collect(Collectors.toList());
    }

    @Override
    public List<Field> getHandballFields() {
        return fieldRepository.findAll().stream().filter(x -> x.getType().equals("Handball")).collect(Collectors.toList());
    }

    @Override
    public List<Field> getTennisFields() {
        return fieldRepository.findAll().stream().filter(x -> x.getType().equals("Tennis")).collect(Collectors.toList());
    }

    @Override
    public Optional<Field> getFieldByID(Integer id) {
        return fieldRepository.findById(id);
    }

    @Override
    public void removeField(Integer id) {
        Field field = fieldRepository.findById(id).orElse(null);
        if(field != null){
            fieldRepository.delete(field);
        }

    }

    @Override
    public Field updateField(Field field) {
        Field aux = fieldRepository.findById(field.getId()).orElse(null);
        if(aux != null){
            aux.setName(field.getName());
            aux.setStreet(field.getStreet());
            aux.setType(field.getType());
            aux.setBeginHour(field.getBeginHour());
            aux.setFinalHour(field.getFinalHour());
        }
        return fieldRepository.save(aux);
    }

}
