import { useEffect, useState } from "react";
import {
    getUserCount,
    getBarberCount,
    getServiceCount,
    getAppointmentCount
} from "../services/dashboardService";

import { getAllAppointments }
    from "../services/appointmentService";

import DashboardCharts from "./DashboardCharts";
import { Link } from "react-router-dom";

function AdminDashboard() {

    const [totalUsers, setTotalUsers] = useState(0);
    const [totalBarbers, setTotalBarbers] = useState(0);
    const [totalServices, setTotalServices] = useState(0);
    const [totalAppointments, setTotalAppointments] = useState(0);

    const [recentAppointments,
        setRecentAppointments] = useState([]);

    useEffect(() => {

        getUserCount()
            .then(res => setTotalUsers(res.data))
            .catch(err => console.error(err));

        getBarberCount()
            .then(res => setTotalBarbers(res.data))
            .catch(err => console.error(err));

        getServiceCount()
            .then(res => setTotalServices(res.data))
            .catch(err => console.error(err));

        getAppointmentCount()
            .then(res => setTotalAppointments(res.data))
            .catch(err => console.error(err));

        getAllAppointments()
            .then((response) => {
                setRecentAppointments(
                    response.data.slice(0, 5)
                );
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div className="container-fluid p-4 bg-light min-vh-100">

            <div className="mb-4">
                <h1 className="fw-bold">
                    📊 Admin Dashboard
                </h1>

                <p className="text-muted">
                    Welcome back, Admin.
                    Here's your business overview.
                </p>
            </div>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body text-center">
                            <h1>👥</h1>
                            <h5>Total Users</h5>
                            <h2 className="fw-bold">
                                {totalUsers}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body text-center">
                            <h1>💈</h1>
                            <h5>Total Barbers</h5>
                            <h2 className="fw-bold">
                                {totalBarbers}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body text-center">
                            <h1>✂️</h1>
                            <h5>Total Services</h5>
                            <h2 className="fw-bold">
                                {totalServices}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body text-center">
                            <h1>📅</h1>
                            <h5>Total Appointments</h5>
                            <h2 className="fw-bold">
                                {totalAppointments}
                            </h2>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row mt-5 g-4">

                <div className="col-md-4">
                    <Link
                        to="/add-barber"
                        className="text-decoration-none"
                    >
                        <div className="card shadow border-0 text-center p-4">
                            <h1>💈</h1>
                            <h5>Add Barber</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link
                        to="/add-service"
                        className="text-decoration-none"
                    >
                        <div className="card shadow border-0 text-center p-4">
                            <h1>✂️</h1>
                            <h5>Add Service</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link
                        to="/add-user"
                        className="text-decoration-none"
                    >
                        <div className="card shadow border-0 text-center p-4">
                            <h1>👤</h1>
                            <h5>Add User</h5>
                        </div>
                    </Link>
                </div>

            </div>



            {/* Charts */}

            <div className="mt-5">
                <div className="card shadow-lg border-0">
                    <div className="card-body">

                        <h4 className="mb-4">
                            📈 Business Analytics
                        </h4>

                        <DashboardCharts />

                    </div>
                </div>
            </div>

            {/* Recent Appointments */}

            <div className="mt-5">

                <div className="card shadow-lg border-0">

                    <div className="card-body">

                        <h4 className="mb-4">
                            📅 Recent Appointments
                        </h4>

                        <div className="table-responsive">

                            <table className="table table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Barber</th>
                                        <th>Service</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {recentAppointments.length > 0 ? (

                                        recentAppointments.map(
                                            (appointment) => (

                                                <tr
                                                    key={
                                                        appointment.id
                                                    }
                                                >

                                                    <td>
                                                        {appointment.id}
                                                    </td>

                                                    <td>
                                                        {
                                                            appointment.user?.name
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            appointment.barber?.name
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            appointment.service?.serviceName
                                                        }
                                                    </td>

                                                    <td>
                                                        {appointment.status}
                                                    </td>

                                                </tr>

                                            )
                                        )

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="5"
                                                className="text-center"
                                            >
                                                No Appointments Found
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;