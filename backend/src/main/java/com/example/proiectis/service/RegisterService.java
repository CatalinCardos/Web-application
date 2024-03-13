package com.example.proiectis.service;


import com.example.proiectis.model.Field;
import com.example.proiectis.model.User;

import java.util.List;

public interface RegisterService {
    User getUserByIdutil (Integer id);
    User addUser(User user);
    List<User> getAllUsers();
    User updateRepoUser(User user);
    void removeUser(Integer id);



}
