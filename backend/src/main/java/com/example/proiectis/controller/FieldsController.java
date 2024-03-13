package com.example.proiectis.controller;

import com.example.proiectis.model.Field;
import com.example.proiectis.service.FieldServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fields")
@CrossOrigin
public class FieldsController {

    @Autowired
    private FieldServiceImpl fieldService;

    @GetMapping("/getAllFootballFields")
    public List<Field> getAllFotballFields() {
        return fieldService.getFootballFields();
    }
    @GetMapping("/getAllBasketFields")
    public List<Field> getAllBasketFields() {
        return fieldService.getBascketFields();
    }
    @GetMapping("/getAllHandballFields")
    public List<Field> getAllHandballFields() {
        return fieldService.getHandballFields();
    }
    @GetMapping("/getAllTennisFields")
    public List<Field> getAllTennisFields() {
        return fieldService.getTennisFields();
    }
    @GetMapping("/getFieldById/{id}")
    public Optional<Field> getFieldByID(@PathVariable Integer id){ return fieldService.getFieldByID(id);}
    @GetMapping("/getAllFields")
    public List<Field> getAllFields(){
        return fieldService.getAllFields();
    }
    @PutMapping("/updateField")
    public Field updateField(@RequestBody Field field)
    {
        return fieldService.updateField(field);
    }
    @PostMapping("/addField")
    public Field addField(@RequestBody Field field) throws ParseException {
       return fieldService.addField(field);
    }
    @DeleteMapping("/removeField/{id}")
    public void removeField(@PathVariable Integer id){
        fieldService.removeField(id);
    }

}
