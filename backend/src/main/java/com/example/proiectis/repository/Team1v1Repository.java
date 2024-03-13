package com.example.proiectis.repository;

import com.example.proiectis.model.Team1v1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Team1v1Repository extends JpaRepository<Team1v1,Integer> {
}
