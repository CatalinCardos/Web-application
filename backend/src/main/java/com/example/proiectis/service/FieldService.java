package com.example.proiectis.service;

import com.example.proiectis.model.Field;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

public interface FieldService {
    Field addField(Field field) throws ParseException;
    List<Field> getAllFields();
    List<Field> getFootballFields();
    List<Field> getBascketFields();
    List<Field> getHandballFields();
    List<Field> getTennisFields();
    Optional<Field> getFieldByID(Integer id);
    void removeField(Integer id);
    Field updateField(Field field);

}
