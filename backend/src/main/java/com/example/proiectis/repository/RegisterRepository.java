package com.example.proiectis.repository;

import com.example.proiectis.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegisterRepository extends JpaRepository<User,Integer> {
}
