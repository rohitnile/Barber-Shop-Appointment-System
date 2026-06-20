import { useState, useEffect } from "react";
import { bookAppointment } from "../services/appointmentService";
import { getAllBarbers } from "../services/barberService";
import { getAllServices } from "../services/serviceService";

function BookAppointment() {

    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    const [barbers, setBarbers] = useState([]);
    const [selectedBarber, setSelectedBarber] = useState("");

    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {

        getAllBarbers()
            .then((response) => {
                setBarbers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        getAllServices()
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        const appointment = {
            appointmentDate,
            appointmentTime,
            status: "PENDING",

            user: {
                id: localStorage.getItem("userId")
            },
            barber: {
                id: selectedBarber
            },
            service: {
                id: selectedService
            }
        };

        bookAppointment(appointment)
            .then(() => {

                alert("Appointment Booked Successfully");

                setAppointmentDate("");
                setAppointmentTime("");
                setSelectedBarber("");
                setSelectedService("");

            })
            .catch((error) => {
                console.error(error);
                alert("Booking Failed");
            });
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow-lg border-0">

                        <div className="card-header bg-dark text-white text-center">

                            <h2 className="mb-0">
                                📅 Book Your Appointment
                            </h2>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>


                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        ✂️ Select Barber
                                    </label>

                                    <select
                                        className="form-select"
                                        value={selectedBarber}
                                        onChange={(e) =>
                                            setSelectedBarber(e.target.value)
                                        }
                                        required
                                    >

                                        <option value="">
                                            Choose Barber
                                        </option>

                                        {barbers.map((barber) => (
                                            <option
                                                key={barber.id}
                                                value={barber.id}
                                            >
                                                {barber.name}
                                            </option>
                                        ))}

                                    </select>

                                </div>


                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        💈 Select Service
                                    </label>

                                    <select
                                        className="form-select"
                                        value={selectedService}
                                        onChange={(e) =>
                                            setSelectedService(e.target.value)
                                        }
                                        required
                                    >

                                        <option value="">
                                            Choose Service
                                        </option>

                                        {services.map((service) => (
                                            <option
                                                key={service.id}
                                                value={service.id}
                                            >
                                                {service.serviceName}
                                            </option>
                                        ))}

                                    </select>

                                </div>


                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        📆 Appointment Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        value={appointmentDate}
                                        onChange={(e) =>
                                            setAppointmentDate(e.target.value)
                                        }
                                        required
                                    />

                                </div>


                                <div className="mb-4">

                                    <label className="form-label fw-bold">
                                        ⏰ Appointment Time
                                    </label>

                                    <input
                                        type="time"
                                        className="form-control"
                                        value={appointmentTime}
                                        onChange={(e) =>
                                            setAppointmentTime(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                    >
                                        Book Appointment
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BookAppointment;