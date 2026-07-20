import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        login({ email, password })
            .then((response) => {

                localStorage.setItem(
                    "token",
                    response.data.token
                );

                localStorage.setItem(
                    "userId",
                    response.data.id
                );

                localStorage.setItem(
                    "role",
                    response.data.role
                );

                localStorage.setItem(
                    "name",
                    response.data.name
                );

                localStorage.setItem(
                    "email",
                     response.data.email
                    );

                alert("Login Successful");

                navigate("/");

                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                alert("Invalid Credentials");
            });
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header bg-dark text-white text-center">

                            <h3>🔐 Login</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
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

export default Login;