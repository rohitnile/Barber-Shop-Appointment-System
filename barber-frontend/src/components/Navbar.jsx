import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/AuthUtils";

function Navbar() {

    const role = getUserRole();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");

        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    ✂️ Barber Shop
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <div className="navbar-nav me-auto">

                        <Link className="nav-link" to="/">
                            <i className="bi bi-house"></i>
                            {" "}Home
                        </Link>

                        <Link className="nav-link" to="/barbers">
                            <i className="bi bi-scissors"></i>
                            {" "}Barbers
                        </Link>

                        <Link className="nav-link" to="/services">
                            <i className="bi bi-list-check"></i>
                            {" "}Services
                        </Link>

                        <Link
                            className="nav-link"
                            to="/book-appointment"
                        >
                            <i className="bi bi-calendar-plus"></i>
                            {" "}Book Appointment
                        </Link>

                        <Link
                            className="nav-link"
                            to="/appointments"
                        >
                            <i className="bi bi-calendar-check"></i>
                            {" "}My Appointments
                        </Link>
                       

                        {role === "ADMIN" && (
                            <Link
                                className="nav-link"
                                to="/admin-dashboard"
                            >
                                <i className="bi bi-speedometer2"></i>
                                {" "}Dashboard
                            </Link>
                        )}

                        {role === "ADMIN" && (
                            <Link
                                className="nav-link"
                                to="/users"
                            >
                                <i className="bi bi-people"></i>
                                {" "}Users
                            </Link>
                        )}

                        {token && (
                            <Link
                                className="nav-link"
                                to="/profile"
                            >
                                <i className="bi bi-person-circle"></i>
                                {" "}Profile
                            </Link>
                        )}

                    </div>

                    <div className="d-flex align-items-center">

                        {token && (
                            <span className="badge bg-success me-3">
                                {role}
                            </span>
                        )}

                        {!token && (
                            <Link
                                className="btn btn-outline-light me-2"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}

                        {!token && (
                            <Link
                                className="btn btn-primary"
                                to="/register"
                            >
                                Register
                            </Link>
                        )}

                        {token && (
                            <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                            >
                                <i className="bi bi-box-arrow-right"></i>
                                {" "}Logout
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;