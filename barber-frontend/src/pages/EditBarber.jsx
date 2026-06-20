import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateBarber } from "../services/barberService";

function EditBarber() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");
    const [availability, setAvailability] = useState(true);

    useEffect(() => {

        axios.get(`http://localhost:1212/api/barbers/${id}`)
            .then((response) => {

                setName(response.data.name);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setSpecialization(response.data.specialization);
                setExperience(response.data.experience);
                setAvailability(response.data.availability);

            })
            .catch((error) => {
                console.error(error);
            });

    }, [id]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const barber = {
            name,
            email,
            phone,
            specialization,
            experience,
            availability
        };

        updateBarber(id, barber)
            .then(() => {

                alert("Barber Updated Successfully");

                navigate("/barbers");

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Edit Barber</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Specialization</label>
                    <input
                        type="text"
                        className="form-control"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Experience</label>
                    <input
                        type="number"
                        className="form-control"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Availability</label>

                    <select
                        className="form-control"
                        value={availability}
                        onChange={(e) =>
                            setAvailability(e.target.value === "true")
                        }
                    >
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update Barber
                </button>

            </form>

        </div>
    );
}

export default EditBarber;