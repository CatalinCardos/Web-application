package com.example.proiectis.service;

import com.example.proiectis.model.Login;
import org.springframework.stereotype.Service;

import java.util.List;


public interface LoginService {
    Login addLogin(Login login);
    List<Login> getAllLogins();
    Login getById(Integer id);
    Login updateRepoLogin(Login login);
    void removeLogin(Integer id);

}
