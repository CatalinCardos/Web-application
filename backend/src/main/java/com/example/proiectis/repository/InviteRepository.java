package com.example.proiectis.repository;

import com.example.proiectis.model.Invite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InviteRepository extends JpaRepository<Invite,Integer> {
}
