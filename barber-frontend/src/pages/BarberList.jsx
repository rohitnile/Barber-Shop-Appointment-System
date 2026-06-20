import { useEffect, useState } from "react";
import {
    getAllBarbers,
    deleteBarber
} from "../services/barberService";
import { Link } from "react-router-dom";

function BarberList() {

    const [barbers, setBarbers] = useState([]);

    const role = localStorage.getItem("role");

    useEffect(() => {
        getAllBarbers()
            .then((response) => {
                setBarbers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDelete = (id) => {

        if (window.confirm("Are you sure you want to delete this barber?")) {

            deleteBarber(id)
                .then(() => {

                    setBarbers(
                        barbers.filter(
                            barber => barber.id !== id
                        )
                    );

                    alert("Barber Deleted Successfully");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Failed to delete barber");
                });
        }
    };

    return (
        <div className="container mt-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    ✂️ Our Professional Barbers
                </h1>

                <p className="text-muted">
                    Meet our skilled and experienced team.
                </p>

            </div>

            <div className="row">

                {barbers.map((barber) => (

                    <div
                        key={barber.id}
                        className="col-md-4 mb-4"
                    >

                        <div className="card shadow h-100 border-0">

                            <div className="card-body">

                                <div className="text-center mb-3">

                                    <i
                                        className="bi bi-person-circle"
                                        style={{
                                            fontSize: "70px"
                                        }}
                                    ></i>

                                </div>

                                <h4 className="text-center">
                                    {barber.name}
                                </h4>

                                <hr />

                                <p>
                                    <strong>Email:</strong>
                                    <br />
                                    {barber.email}
                                </p>

                                <p>
                                    <strong>Phone:</strong>
                                    <br />
                                    {barber.phone}
                                </p>

                                <p>
                                    <strong>Specialization:</strong>
                                    <br />
                                    {barber.specialization}
                                </p>

                            </div>

                            {role === "ADMIN" && (
                                <div className="card-footer bg-white border-0">

                                    <div className="d-flex justify-content-center">

                                        <Link
                                            to={`/edit-barber/${barber.id}`}
                                            className="btn btn-warning me-2"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                            {" "}Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDelete(barber.id)
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

export default BarberList;