package com.rohit.entity;

import java.time.LocalDate;
import jakarta.validation.constraints.*;
import java.time.LocalTime;

import jakarta.persistence.*;

@Entity
@Table(name="appointments")
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	private LocalDate appointmentDate;
	
	private LocalTime appointmentTime;
	
	private String status;

	

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "barber_id")
	private Barber barber;

	@ManyToOne
	@JoinColumn(name = "service_id")
	private Services service;

	public Appointment() {
		
	}

	public Appointment(Long id, @NotEmpty LocalDate appointmentDate, @NotEmpty LocalTime appointmentTime, String status,
			User user, Barber barber, Services service) {
		
		this.id = id;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.status = status;
		this.user = user;
		this.barber = barber;
		this.service = service;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public LocalTime getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(LocalTime appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Barber getBarber() {
		return barber;
	}

	public void setBarber(Barber barber) {
		this.barber = barber;
	}

	public Services getService() {
		return service;
	}

	public void setService(Services service) {
		this.service = service;
	}
	
	

	
	
	
}
