package com.rohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.rohit.dto.LoginResponse;
import com.rohit.entity.User;
import com.rohit.repository.UserRepository;
import com.rohit.security.JwtUtil;
import com.rohit.security.LoginRequest;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest request) {

	    User user = userRepository.findByEmail(request.getEmail());

	    System.out.println("Email Entered: " +
	            request.getEmail());

	    System.out.println("Password Entered: " +
	            request.getPassword());

	    if (user == null) {

	        System.out.println("User Not Found");

	        throw new RuntimeException(
	                "Invalid Credentials");
	    }

	    System.out.println("DB Password: " +
	            user.getPassword());

	    boolean match =
	            passwordEncoder.matches(
	                    request.getPassword(),
	                    user.getPassword());

	    System.out.println(
	            "Password Match: " + match);

	    if (match) {

	        String token =
	                JwtUtil.generateToken(
	                        user.getEmail(),
	                        user.getRole());

	        return new LoginResponse(
	                token,
	                user.getId(),
	                user.getName(),
	                user.getEmail(),
	                user.getRole()
	        );
	    }

	    throw new RuntimeException(
	            "Invalid Credentials");
	}

	@PostMapping("/register")
	public User register(@RequestBody User user) {

	    user.setPassword(
	        passwordEncoder.encode(user.getPassword())
	    );

	    user.setRole("CUSTOMER");

	    return userRepository.save(user);
	}
}