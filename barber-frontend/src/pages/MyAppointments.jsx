import { useEffect, useState } from "react";
import {
    getAllAppointments,
    getAppointmentsByUser,
    deleteAppointment,
    updateAppointmentStatus
} from "../services/appointmentService";

function MyAppointments() {

    const [appointments, setAppointments] = useState([]);

    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");

    useEffect(() => {

        loadAppointments();

    }, []);

    const loadAppointments = () => {

        if (role === "ADMIN") {

            getAllAppointments()
                .then((response) => {
                    setAppointments(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });

        } else {

            getAppointmentsByUser(userId)
                .then((response) => {
                    setAppointments(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const handleDelete = (id) => {

        if (window.confirm(
            "Are you sure you want to cancel this appointment?"
        )) {

            deleteAppointment(id)
                .then(() => {

                    setAppointments(
                        appointments.filter(
                            appointment =>
                                appointment.id !== id
                        )
                    );

                    alert(
                        "Appointment Cancelled Successfully"
                    );

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

   const handleStatusUpdate = (id, status) => {

    updateAppointmentStatus(id, status)
        .then((response) => {

            setAppointments(
                appointments.map((appointment) =>
                    appointment.id === id
                        ? {
                            ...appointment,
                            status: response.data.status
                        }
                        : appointment
                )
            );

            alert("Status Updated Successfully");
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to update status");
        });
};

    const getStatusBadge = (status) => {

        if (status === "APPROVED") {
            return (
                <span className="badge bg-success">
                    APPROVED
                </span>
            );
        }

        if (status === "PENDING") {
            return (
                <span className="badge bg-warning text-dark">
                    PENDING
                </span>
            );
        }

        if (status === "CANCELLED") {
            return (
                <span className="badge bg-danger">
                    CANCELLED
                </span>
            );
        }

        return (
            <span className="badge bg-secondary">
                {status}
            </span>
        );
    };

    return (
        <div className="container mt-5">

            <div className="text-center mb-4">

                <h1 className="fw-bold">
                    📅 Appointments
                </h1>

                <p className="text-muted">

                    {role === "ADMIN"
                        ? "Manage all customer appointments"
                        : "Manage your appointments"}

                </p>

            </div>

            <div className="card shadow border-0">

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>

                                    {role === "ADMIN" &&
                                        <th>User</th>}

                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Barber</th>
                                    <th>Service</th>
                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {appointments.length > 0 ? (

                                    appointments.map((appointment) => (

                                        <tr key={appointment.id}>

                                            <td>
                                                {appointment.id}
                                            </td>

                                            {role === "ADMIN" && (
                                                <td>
                                                    {appointment.user?.name}
                                                </td>
                                            )}

                                            <td>
                                                {appointment.appointmentDate}
                                            </td>

                                            <td>
                                                {appointment.appointmentTime}
                                            </td>

                                            <td>
                                                {getStatusBadge(
                                                    appointment.status
                                                )}
                                            </td>

                                            <td>
                                                {appointment.barber?.name}
                                            </td>

                                            <td>
                                                {appointment.service?.serviceName}
                                            </td>

                                            <td>

                                                {role === "ADMIN" ? (

                                                    <>
                                                        <button
                                                            className="btn btn-success btn-sm me-2"
                                                            onClick={() =>
                                                                handleStatusUpdate(
                                                                    appointment.id,
                                                                    "APPROVED"
                                                                )
                                                            }
                                                        >
                                                            Approve
                                                        </button>

                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() =>
                                                                handleStatusUpdate(
                                                                    appointment.id,
                                                                    "CANCELLED"
                                                                )
                                                            }
                                                        >
                                                            Reject
                                                        </button>
                                                    </>

                                                ) : (

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleDelete(
                                                                appointment.id
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>

                                                )}

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="8"
                                            className="text-center"
                                        >
                                            No appointments found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MyAppointments;