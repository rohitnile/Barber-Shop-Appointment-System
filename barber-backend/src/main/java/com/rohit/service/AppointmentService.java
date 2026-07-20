package com.rohit.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohit.entity.Appointment;
import com.rohit.entity.Barber;
import com.rohit.entity.Services;
import com.rohit.exception.ResourceNotFoundException;
import com.rohit.repository.AppointmentRepository;
import com.rohit.repository.BarberRepository;
import com.rohit.repository.ServiceRepository;
import java.time.format.DateTimeFormatter;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Autowired
	private BarberRepository barberRepository;
	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");

	public Appointment saveAppointment(Appointment appointment) {

	    // Fetch the complete service from the database
	    Services selectedService = serviceRepository.findById(
	            appointment.getService().getId())
	            .orElseThrow(() -> new RuntimeException("Service not found"));

	    int newDuration = selectedService.getDuration();

	    LocalTime newStartTime = appointment.getAppointmentTime();
	    LocalTime newEndTime = newStartTime.plusMinutes(newDuration);

	    // Get all appointments of the barber on the selected date
	    List<Appointment> appointments = appointmentRepository
	            .findByBarberAndAppointmentDate(
	                    appointment.getBarber(),
	                    appointment.getAppointmentDate());

	    for (Appointment existingAppointment : appointments) {

	        LocalTime existingStartTime = existingAppointment.getAppointmentTime();

	        int existingDuration = existingAppointment
	                .getService()
	                .getDuration();

	        LocalTime existingEndTime =
	                existingStartTime.plusMinutes(existingDuration);

	        // Check for overlapping appointments
	        if (newStartTime.isBefore(existingEndTime)
	                && newEndTime.isAfter(existingStartTime)) {

	            throw new RuntimeException(
	                    "This barber is busy until "
	                    + existingEndTime.format(formatter)
	                    + ". Please choose a time after "
	                    + existingEndTime.format(formatter) + ".");
	        }
	    }

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



	public List<LocalTime> getBookedSlot(Long barberId, LocalDate date) {
		  Barber barber = barberRepository.findById(barberId)
		            .orElseThrow(() -> new RuntimeException("Barber not found"));

		    List<Appointment> appointments =
		            appointmentRepository.findByBarberAndAppointmentDate(barber, date);

		    return appointments.stream()
		            .map(Appointment::getAppointmentTime)
		            .toList();
	}
}
