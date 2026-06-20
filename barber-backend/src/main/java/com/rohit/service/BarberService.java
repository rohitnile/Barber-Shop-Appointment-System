package com.rohit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohit.entity.Barber;
import com.rohit.exception.ResourceNotFoundException;
import com.rohit.repository.BarberRepository;

@Service
public class BarberService {
	
	@Autowired
	private BarberRepository barberRepository;
	
	public Barber saveBarber(Barber barber) {
		return barberRepository.save(barber);
	}
	
	public List<Barber> getAllBarbers(){
		return barberRepository.findAll();
	}
	
	public Barber getBarberById(Long id) {
		return barberRepository.findById(id).orElseThrow(() ->
        new ResourceNotFoundException(
                "Barber not found with id : " + id));
	}
	
	public void deleteBarber(Long id) {
		barberRepository.deleteById(id);
	}
	
	public Barber updateBarber(Long id, Barber barber) {

	    Barber existingBarber = barberRepository.findById(id).orElse(null);

	    if (existingBarber != null) {

	        existingBarber.setName(barber.getName());
	        existingBarber.setEmail(barber.getEmail());
	        existingBarber.setPhone(barber.getPhone());
	        existingBarber.setSpecialization(barber.getSpecialization());
	        existingBarber.setExperience(barber.getExperience());
	        existingBarber.setAvailability(barber.getAvailability());

	        return barberRepository.save(existingBarber);
	    }

	    return null;
	}
	

}
