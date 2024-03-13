package com.example.proiectis.repository;


import com.example.proiectis.model.Team5v5;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Team5v5Repository extends JpaRepository<Team5v5,Integer> {
}
