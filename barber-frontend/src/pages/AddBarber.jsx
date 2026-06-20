import { useState } from "react";
import { addBarber } from "../services/barberService";

function AddBarber() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");
    const [availability, setAvailability] = useState(true);

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

        addBarber(barber)
            .then(() => {
                alert("Barber Added Successfully");

                setName("");
                setEmail("");
                setPhone("");
                setSpecialization("");
                setExperience("");
                setAvailability(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Add Barber</h2>

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
                    Add Barber
                </button>

            </form>

        </div>
    );
}

export default AddBarber;