package com.example.proiectis.controller;

import com.example.proiectis.model.Login;
import com.example.proiectis.model.User;
import com.example.proiectis.service.LoginServiceImpl;
import com.example.proiectis.service.RegisterService;
import com.example.proiectis.service.RegisterServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {
    @Autowired
    private RegisterServiceImpl registerService;
    @Autowired
    private LoginServiceImpl loginService;

    @PostMapping("/newUserLogin")
    public Login createNewUser(@RequestBody Login login) {
            loginService.addLogin(login);
            return login;
    }

    @PostMapping("/newUserRegister")
    public String createNewUser(@RequestBody User user) {
        registerService.addUser(user);
        return "Register for user done!";
    }

    @PutMapping("/putUserDate")
    public User updateLogin(@RequestBody User user) {
        return registerService.updateRepoUser(user);
    }

    @GetMapping("/getUserByIdutil/{id}")
    public User getById(@PathVariable Integer id) {
        return registerService.getUserByIdutil(id);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return registerService.getAllUsers();
    }

    @DeleteMapping("/removeUser/{id}")
    public void removeUser(@PathVariable Integer id){
        registerService.removeUser(id);
    }
}
