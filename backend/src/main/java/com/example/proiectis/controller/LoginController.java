package com.example.proiectis.controller;

import com.example.proiectis.model.Login;
import com.example.proiectis.model.User;
import com.example.proiectis.service.LoginService;
import com.example.proiectis.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public String add(@RequestBody Login login){
        loginService.addLogin(login);
        return "New login is added";
    }

    @GetMapping("/getAll")
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @PutMapping("/putUserLogin")
    public Login updateLogin(@RequestBody Login login) {
        return loginService.updateRepoLogin(login);
    }

    @DeleteMapping("/removeLogin/{id}")
    public void removeLogin(@PathVariable Integer id){
        loginService.removeLogin(id);
    }

}
