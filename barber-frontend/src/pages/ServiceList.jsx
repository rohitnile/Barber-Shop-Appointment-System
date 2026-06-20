import { useEffect, useState } from "react";
import {
    getAllServices,
    deleteService
} from "../services/serviceService";
import { Link } from "react-router-dom";

function ServiceList() {

    const [services, setServices] = useState([]);

    const role = localStorage.getItem("role");

    useEffect(() => {

        getAllServices()
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const handleDelete = (id) => {

        if (window.confirm("Delete this service?")) {

            deleteService(id)
                .then(() => {

                    setServices(
                        services.filter(
                            service => service.id !== id
                        )
                    );

                    alert("Service Deleted Successfully");

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="container mt-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    💈 Our Services
                </h1>

                <p className="text-muted">
                    Choose the perfect grooming service for your style.
                </p>

            </div>

            <div className="row">

                {services.map((service) => (

                    <div
                        key={service.id}
                        className="col-md-4 mb-4"
                    >

                        <div className="card shadow h-100 border-0">

                            <div className="card-body">

                                <div className="text-center mb-3">

                                    <i
                                        className="bi bi-scissors"
                                        style={{
                                            fontSize: "60px"
                                        }}
                                    ></i>

                                </div>

                                <h4 className="text-center">
                                    {service.serviceName}
                                </h4>

                                <hr />

                                <p className="text-center">

                                    <span className="badge bg-success fs-6">
                                        ₹ {service.price}
                                    </span>

                                </p>

                                <p className="text-center">

                                    <span className="badge bg-primary fs-6">
                                        {service.duration} Minutes
                                    </span>

                                </p>

                            </div>

                            {role === "ADMIN" && (
                                <div className="card-footer bg-white border-0">

                                    <div className="d-flex justify-content-center">

                                        <Link
                                            to={`/edit-service/${service.id}`}
                                            className="btn btn-warning me-2"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                            {" "}Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDelete(service.id)
                                            }
                                        >
                                            <i className="bi bi-trash"></i>
                                            {" "}Delete
                                        </button>

                                    </div>

                                </div>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ServiceList;