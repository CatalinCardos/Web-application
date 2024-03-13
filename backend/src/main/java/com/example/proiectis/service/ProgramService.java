package com.example.proiectis.service;


import com.example.proiectis.model.Program;

import java.util.List;

public interface ProgramService {

    List<Program> getAllPrograms();
    Program getProgramByID(Integer id);
    Program addCount(Integer id);
    void removeProgram(Integer id);
    List<Program> getALlProgramsByFieldId(Integer id);
}
