package com.example.proiectis.service;

import com.example.proiectis.model.Program;
import com.example.proiectis.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramServiceImpl implements ProgramService{

    @Autowired
    private ProgramRepository programRepository;

    @Override
    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    @Override
    public Program getProgramByID(Integer id) {
        return programRepository.findById(id).orElse(null);
    }

    @Override
    public Program addCount(Integer id) {
        Program program = programRepository.findAll().stream().filter(x -> x.getId() == id).findFirst().orElse(null);
        if(program != null){
            program.setCapacity(program.getCapacity() + 1);
        }
        return programRepository.save(program);
    }

    @Override
    public void removeProgram(Integer id) {
        List<Program> programs = programRepository.findAll().stream().filter(x -> x.getIdField() == id).toList();
        programRepository.deleteAll(programs);
    }

    @Override
    public List<Program> getALlProgramsByFieldId(Integer id) {
        return programRepository.findAll().stream().filter(x -> x.getIdField() == id).toList();
    }

}
