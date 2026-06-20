package com.rohit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohit.entity.Services;

public interface ServiceRepository extends JpaRepository<Services, Long> {

}
