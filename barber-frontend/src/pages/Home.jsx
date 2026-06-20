import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            {/* Hero Section */}
            <div
                className="bg-dark text-white text-center py-5"
                style={{
                    background:
                        "linear-gradient(to right, #1f1f1f, #343a40)"
                }}
            >
                <div className="container">

                    <h1 className="display-3 fw-bold">
                        ✂️ Premium Barber Shop
                    </h1>

                    <p className="lead mt-3">
                        Professional Haircuts, Beard Styling &
                        Grooming Services.
                    </p>

                    <Link
                        to="/book-appointment"
                        className="btn btn-warning btn-lg mt-3"
                    >
                        Book Appointment
                    </Link>

                </div>
            </div>

            {/* Features */}
            <div className="container py-5">

                <h2 className="text-center fw-bold mb-5">
                    Why Choose Us?
                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>💈</h1>
                                <h4>Expert Barbers</h4>
                                <p>
                                    Highly skilled professionals
                                    with years of experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>📅</h1>
                                <h4>Easy Booking</h4>
                                <p>
                                    Schedule appointments online
                                    in just a few clicks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100">
                            <div className="card-body text-center">
                                <h1>⭐</h1>
                                <h4>Premium Service</h4>
                                <p>
                                    Get the best grooming experience
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Services Section */}
            <div className="bg-light py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Our Popular Services
                    </h2>

                    <div className="row">

                        <div className="col-md-3 mb-3">
                            <div className="card shadow text-center">
                                <div className="card-body">
                                    <h4>✂️ Hair Cut</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-3">
                            <div className="card shadow text-center">
                                <div className="card-body">
                                    <h4>🧔 Beard Trim</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-3">
                            <div className="card shadow text-center">
                                <div className="card-body">
                                    <h4>💆 Hair Spa</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-3">
                            <div className="card shadow text-center">
                                <div className="card-body">
                                    <h4>🔥 Styling</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* CTA */}
            <div className="container my-5">

                <div className="card bg-primary text-white shadow-lg border-0">

                    <div className="card-body text-center p-5">

                        <h2 className="fw-bold">
                            Ready For Your Next Haircut?
                        </h2>

                        <p className="mt-3">
                            Book an appointment with our professional
                            barbers and enjoy premium grooming services.
                        </p>

                        <Link
                            to="/book-appointment"
                            className="btn btn-light btn-lg"
                        >
                            Book Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;