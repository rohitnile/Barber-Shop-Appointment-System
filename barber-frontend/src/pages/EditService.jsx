import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateService } from "../services/serviceService";

function EditService() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [serviceName, setServiceName] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {

        axios.get(`http://localhost:1212/api/services/${id}`)
            .then((response) => {

                setServiceName(response.data.serviceName);
                setPrice(response.data.price);
                setDuration(response.data.duration);

            })
            .catch((error) => {
                console.error(error);
            });

    }, [id]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const service = {
            serviceName,
            price,
            duration
        };

        updateService(id, service)
            .then(() => {

                alert("Service Updated Successfully");

                navigate("/services");

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Edit Service</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>Service Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={serviceName}
                        onChange={(e) =>
                            setServiceName(e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Duration</label>
                    <input
                        type="number"
                        className="form-control"
                        value={duration}
                        onChange={(e) =>
                            setDuration(e.target.value)
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update Service
                </button>

            </form>

        </div>
    );
}

export default EditService;