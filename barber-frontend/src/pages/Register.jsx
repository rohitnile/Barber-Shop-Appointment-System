import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "CUSTOMER"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        register(user)
            .then(() => {
                alert("Registration Successful");
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />

                <button
                    className="btn btn-success"
                    type="submit">

                    Register

                </button>

            </form>

        </div>
    );
}

export default Register;