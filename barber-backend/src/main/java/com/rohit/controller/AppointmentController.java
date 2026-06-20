package com.rohit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rohit.entity.Appointment;
import com.rohit.repository.AppointmentRepository;
import com.rohit.service.AppointmentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;
    
    @Autowired
    private AppointmentRepository appointmentRepository ;

    
    @PostMapping
    public Appointment bookAppointment(
            @Valid @RequestBody Appointment appointment) {

        return appointmentService.saveAppointment(appointment);
    }

    
    @GetMapping
    public List<Appointment> getAllAppointments() {

        return appointmentService.getAllAppointments();
    }

   
    @GetMapping("/{id}")
    public Appointment getAppointmentById(
            @PathVariable Long id) {

        return appointmentService.getAppointmentById(id);
    }

   
    @PutMapping("/{id}")
    public Appointment updateAppointment(
    		@Valid
            @PathVariable Long id,
            @RequestBody Appointment appointment) {

        return appointmentService.updateAppointment(id, appointment);
    }


    @DeleteMapping("/{id}")
    public String deleteAppointment(
            @PathVariable Long id) {

        appointmentService.deleteAppointment(id);
        return "Appointment Deleted Successfully";
    }


    @GetMapping("/user/{userId}")
    public List<Appointment> getAppointmentsByUser(
            @PathVariable Long userId) {

        return appointmentService.getAppointmentsByUser(userId);
    }

   
    @GetMapping("/barber/{barberId}")
    public List<Appointment> getAppointmentsByBarber(
            @PathVariable Long barberId) {

        return appointmentService.getAppointmentsByBarber(barberId);
    }
    
    @PutMapping("/{id}/status")
    public Appointment updateStatus(
    		@Valid
            @PathVariable Long id,
            @RequestParam String status) {

        return appointmentService.updateStatus(id, status);
    }
    
    @GetMapping("/status-count")
    public List<Object[]> getStatusCount() {
        return appointmentRepository.countAppointmentsByStatus();
    }
}