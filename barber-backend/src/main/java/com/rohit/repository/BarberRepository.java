package com.rohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohit.entity.Barber;

public interface BarberRepository extends JpaRepository<Barber, Long> {

}
