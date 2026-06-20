package com.rohit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohit.entity.Barber;
import com.rohit.repository.BarberRepository;
import com.rohit.service.BarberService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/barbers")
@CrossOrigin("http://localhost:5173")
public class BarberController {
	
	@Autowired
	private BarberService barberService;
	
	@Autowired
	private BarberRepository barberRepository;
	
	@PostMapping
	public Barber saveService(@Valid @RequestBody Barber barber) {
		return barberService.saveBarber(barber);
	}
	
	@GetMapping
	public List<Barber> getAllBarbers(){
		return barberService.getAllBarbers();
	}
	
	@GetMapping("/{id}")
	public Barber getBarberById(@PathVariable Long id) {
		return barberService.getBarberById(id);
	}
	
	@PutMapping("/{id}")
	public Barber updateBarber(@Valid @PathVariable Long id,
	                           @RequestBody Barber barber) {

	    return barberService.updateBarber(id, barber);
	}
	
	@DeleteMapping("/{id}")
	public String deleteBarber(@PathVariable Long id) {
		barberService.deleteBarber(id);
		return "Barber Deleted Successfully";
	}
	
	@GetMapping("/count")
	public long getBarberCount() {
	    return barberRepository.count();
	}

}
