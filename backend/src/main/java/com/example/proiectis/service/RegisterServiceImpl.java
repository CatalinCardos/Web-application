package com.example.proiectis.service;

import com.example.proiectis.model.User;
import com.example.proiectis.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.List;

@Service
public class RegisterServiceImpl implements RegisterService{

    @Autowired
    private RegisterRepository registerRepository;

    @Override
    public User getUserByIdutil(Integer id) {
        return registerRepository.findAll().stream().filter(x -> x.getIdutil() == id).findFirst().orElse(null);
    }

    @Override
    public User addUser(User user) {
        return registerRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return registerRepository.findAll();
    }

    @Override
    public User updateRepoUser(User user) {
        User auxUser = registerRepository.findById(user.getId()).orElse(null);
        if(auxUser != null){
            auxUser.setLastName(user.getLastName());
            auxUser.setFirstName(user.getFirstName());
            auxUser.setCounty(user.getCounty());
            auxUser.setCity(user.getCity());
            auxUser.setAddress(user.getAddress());
            auxUser.setRole(user.getRole());
            auxUser.setFavoriteSport(user.getfavoriteSport());
            auxUser.setKnowsBasket(user.isKnowsBasket());
            auxUser.setKnowsFootball(user.isKnowsFootball());
            auxUser.setKnowsHandball(user.isKnowsHandball());
            auxUser.setKnowsTennis(user.isKnowsTennis());
        }
        return registerRepository.save(auxUser);
    }

    @Override
    public void removeUser(Integer id) {
        User user = registerRepository.findById(id).orElse(null);
        if(user != null){
            registerRepository.delete(user);
        }

    }


}
