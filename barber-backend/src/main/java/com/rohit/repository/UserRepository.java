package com.rohit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.rohit.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	    User findByEmail(String email);
	
}
