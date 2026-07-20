package com.rohit.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rohit.entity.Appointment;
import com.rohit.entity.Barber;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    List<Appointment> findByUserId(Long userId);

    List<Appointment> findByBarberId(Long barberId);
    
    @Query("""
        SELECT a.status, COUNT(a)
        FROM Appointment a
        GROUP BY a.status
    """)
    List<Object[]> countAppointmentsByStatus();

	Optional<Appointment> findByBarberAndAppointmentDateAndAppointmentTime(Barber barber, LocalDate appointmentDate,  LocalTime appointmentTime);
	
	List<Appointment> findByBarberAndAppointmentDate(
	        Barber barber,
	        LocalDate appointmentDate);
}