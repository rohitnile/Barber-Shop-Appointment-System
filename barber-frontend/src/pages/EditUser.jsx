import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateUser } from "../services/userService";

function EditUser() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {

        axios.get(`http://localhost:1212/api/users/${id}`)
            .then((response) => {

                setName(response.data.name);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setPhone(response.data.phone);
                setRole(response.data.role);

            });

    }, [id]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const user = {
            name,
            email,
            password,
            phone,
            role
        };

        updateUser(id, user)
            .then(() => {

                alert("User Updated Successfully");

                navigate("/users");

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Edit User</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <select
                    className="form-control mb-3"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="CUSTOMER">
                        CUSTOMER
                    </option>

                    <option value="ADMIN">
                        ADMIN
                    </option>
                </select>

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Update User
                </button>

            </form>

        </div>
    );
}

export default EditUser;