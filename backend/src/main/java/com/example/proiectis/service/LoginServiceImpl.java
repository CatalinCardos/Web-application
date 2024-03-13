package com.example.proiectis.service;

import com.example.proiectis.model.Login;
import com.example.proiectis.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService{

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login addLogin(Login login) {
        return loginRepository.save(login);
    }

    @Override
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    @Override
    public Login getById(Integer id) {
        return null;
    }

    @Override
    public Login updateRepoLogin(Login login) {
        Login auxLogin = loginRepository.findById(login.getId()).orElse(null);
        if(auxLogin != null){
            auxLogin.setPassword(login.getPassword());
            auxLogin.setUsername(login.getUsername());
        }
        return loginRepository.save(auxLogin);
    }

    @Override
    public void removeLogin(Integer id) {
        Login login = loginRepository.findById(id).orElse(null);
        if(login != null){
            loginRepository.delete(login);
        }

    }

}
