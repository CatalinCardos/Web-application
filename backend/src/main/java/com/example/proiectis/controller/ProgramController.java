package com.example.proiectis.controller;

import com.example.proiectis.model.Program;
import com.example.proiectis.service.ProgramService;
import com.example.proiectis.service.ProgramServiceImpl;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/program")
@CrossOrigin
public class ProgramController {

    @Autowired
    private ProgramServiceImpl programServiceImpl;

    @GetMapping("/getAllPrograms")
    public List<Program> getAllProgramsFromRepo(){
        return programServiceImpl.getAllPrograms();
    }

    @GetMapping("/getAllProgramsByFieldId/{id}")
    public List<Program> getAllProgramsByFieldID(@PathVariable Integer id){
        return programServiceImpl.getALlProgramsByFieldId(id);
    }

    @GetMapping("/getProgramByID/{id}")
    public Program getProgramByID(@PathVariable Integer id){
        return programServiceImpl.getProgramByID(id);
    }

    @PostMapping("/addCount/{id}")
    public Program addCountPlayer(@PathVariable Integer id){
        return programServiceImpl.addCount(id);
    }

    @DeleteMapping("/removeProgram/{idField}")
    public void removeProgram(@PathVariable Integer idField){
        programServiceImpl.removeProgram(idField);
    }

}
