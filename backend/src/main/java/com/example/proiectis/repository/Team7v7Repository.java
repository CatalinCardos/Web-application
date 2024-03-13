package com.example.proiectis.repository;

import com.example.proiectis.model.Team7v7;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Team7v7Repository extends JpaRepository<Team7v7,Integer> {
}
