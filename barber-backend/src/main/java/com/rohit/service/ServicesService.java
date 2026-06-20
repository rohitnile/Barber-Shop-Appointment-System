package com.rohit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohit.entity.Services;
import com.rohit.exception.ResourceNotFoundException;
import com.rohit.repository.ServiceRepository;

@Service
public class ServicesService {
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	public Services saveService(Services service) {
		return serviceRepository.save(service);
	}
	
	public List<Services> getAllServices(){
		return serviceRepository.findAll();
	}
	
	public Services getServiceById(Long id) {
		return serviceRepository.findById(id).orElseThrow(() ->
        new ResourceNotFoundException(
                "Service not found with id : " + id));
	}
	
	public void deleteService(Long id) {
		serviceRepository.deleteById(id);
	}
	
	public Services updateService(Long id, Services updatedService) {

	    Services service = serviceRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Service not found"));

	    service.setServiceName(updatedService.getServiceName());
	    service.setPrice(updatedService.getPrice());
	    service.setDuration(updatedService.getDuration());

	    return serviceRepository.save(service);
	}
}
