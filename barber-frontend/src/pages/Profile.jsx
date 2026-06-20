function Profile() {

    const name =
        localStorage.getItem("name");

    const email =
        localStorage.getItem("email");

    const role =
        localStorage.getItem("role");

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow-lg border-0">

                        <div className="card-body text-center p-5">

                            <div className="mb-4">

                                <i
                                    className="bi bi-person-circle"
                                    style={{
                                        fontSize: "100px",
                                        color: "#0d6efd"
                                    }}
                                ></i>

                            </div>

                            <h2 className="fw-bold mb-4">
                                My Profile
                            </h2>

                            <hr />

                            <div className="text-start mt-4">

                                <p className="fs-5">
                                    <strong>
                                        👤 Name:
                                    </strong>
                                    {" "}
                                    {name}
                                </p>

                                <p className="fs-5">
                                    <strong>
                                        📧 Email:
                                    </strong>
                                    {" "}
                                    {email}
                                </p>

                                <p className="fs-5">
                                    <strong>
                                        🔑 Role:
                                    </strong>
                                    {" "}
                                    <span
                                        className={
                                            role === "ADMIN"
                                                ? "badge bg-danger"
                                                : "badge bg-success"
                                        }
                                    >
                                        {role}
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Profile;