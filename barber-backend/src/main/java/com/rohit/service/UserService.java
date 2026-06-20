package com.rohit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.rohit.entity.User;
import com.rohit.exception.ResourceNotFoundException;
import com.rohit.repository.UserRepository;



@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public User saveUser(User user) {

	    user.setPassword(
	            passwordEncoder.encode(user.getPassword()));

	    return userRepository.save(user);
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public User getUserById(Long id) {
		return userRepository.findById(id).orElseThrow(() ->
        new ResourceNotFoundException(
                "User not found with id : " + id));
	}
	
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	
	public User updateUser(Long id, User user) {

	    User existingUser = userRepository.findById(id).orElse(null);

	    if (existingUser != null) {
	        existingUser.setName(user.getName());
	        existingUser.setEmail(user.getEmail());
	        existingUser.setPassword(user.getPassword());
	        existingUser.setPhone(user.getPhone());
	        existingUser.setRole(user.getRole());

	        return userRepository.save(existingUser);
	    }

	    return null;
	}
	
	
	
	

}
