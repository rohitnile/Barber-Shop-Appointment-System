import { useState } from "react";
import { addService } from "../services/serviceService";

function AddService() {

    const [serviceName, setServiceName] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const service = {
            serviceName,
            price,
            duration
        };

        addService(service)
            .then(() => {

                alert("Service Added Successfully");

                setServiceName("");
                setPrice("");
                setDuration("");

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-4">

            <h2>Add Service</h2>

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
                    <label>Duration (Minutes)</label>

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
                    Add Service
                </button>

            </form>

        </div>
    );
}

export default AddService;