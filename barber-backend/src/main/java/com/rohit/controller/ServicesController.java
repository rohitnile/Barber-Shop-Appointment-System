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

import com.rohit.entity.Services;
import com.rohit.repository.ServiceRepository;
import com.rohit.service.ServicesService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173")
public class ServicesController {
	
	@Autowired
	private ServicesService servicesService;
	
	@Autowired
	private  ServiceRepository serviceRepository;
	
	@PostMapping
	public Services saveService(@Valid @RequestBody Services service ) {
		return servicesService.saveService(service);
	}
	
	@GetMapping
	public List<Services> getAllServices(){
		return servicesService.getAllServices();
	}
	
	@GetMapping("/{id}")
	public Services getServiceById(@PathVariable Long id) {
		return servicesService.getServiceById(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteService(@PathVariable Long id) {
		servicesService.deleteService(id);
		return "Service Delete Successfully";
	}
	
	@PutMapping("/{id}")
	public Services updateService(
	        @PathVariable Long id,
	        @RequestBody Services service) {

	    return servicesService.updateService(id, service);
	}
	
	@GetMapping("/count")
	public long getServiceCount() {
	    return serviceRepository.count();
	}
	

}
