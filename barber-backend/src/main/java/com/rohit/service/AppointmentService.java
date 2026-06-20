package com.rohit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohit.entity.Appointment;
import com.rohit.exception.ResourceNotFoundException;
import com.rohit.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;

	public Appointment saveAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

	public Appointment getAppointmentById(Long id) {
		return appointmentRepository.findById(id).orElseThrow(() ->
        new ResourceNotFoundException(
                "Appointment not found with id : " + id));
	}

	public void deleteAppointment(Long id) {
		appointmentRepository.deleteById(id);
	}

	public Appointment updateAppointment(Long id, Appointment appointment) {

		Appointment existingAppointment = appointmentRepository.findById(id).orElse(null);

		if (existingAppointment != null) {

			existingAppointment.setAppointmentDate(appointment.getAppointmentDate());

			existingAppointment.setAppointmentTime(appointment.getAppointmentTime());

			return appointmentRepository.save(existingAppointment);
		}

		return null;
	}
	
	public List<Appointment> getAppointmentsByUser(Long userId) {
	    return appointmentRepository.findByUserId(userId);
	}

	public List<Appointment> getAppointmentsByBarber(Long barberId) {
	    return appointmentRepository.findByBarberId(barberId);
	}
	
	public Appointment updateStatus(Long id, String status) {

	    Appointment appointment =
	            appointmentRepository.findById(id)
	            .orElseThrow(() ->
	                    new RuntimeException("Appointment not found"));

	    appointment.setStatus(status);

	    return appointmentRepository.save(appointment);
	}
}
