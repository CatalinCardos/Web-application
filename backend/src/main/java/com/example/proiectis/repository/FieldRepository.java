package com.example.proiectis.repository;

import com.example.proiectis.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepository extends JpaRepository<Field,Integer> {
}
