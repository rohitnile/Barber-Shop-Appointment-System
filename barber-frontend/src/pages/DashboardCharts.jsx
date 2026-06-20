import { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import {
    getAppointmentStatusCount
} from "../services/appointmentService";

function DashboardCharts() {

    const [data, setData] = useState([]);

    useEffect(() => {

        getAppointmentStatusCount()
            .then((response) => {

                const formatted =
                    response.data.map(item => ({
                        name: item[0],
                        value: item[1]
                    }));

                setData(formatted);

            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const COLORS = [
        "#28a745", // APPROVED
        "#ffc107", // PENDING
        "#dc3545", // CANCELLED
        "#0d6efd"  // COMPLETED
    ];

    return (
        <div className="card shadow-lg border-0 mt-4">

            <div className="card-body">

                <h4 className="text-center fw-bold mb-3">
                    📊 Appointment Status Analytics
                </h4>

                <p className="text-center text-muted">
                    Distribution of appointments by current status
                </p>

                {data.length > 0 ? (

                    <ResponsiveContainer
                        width="100%"
                        height={400}
                    >
                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={140}
                                label
                            >

                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[
                                                index %
                                                COLORS.length
                                            ]
                                        }
                                    />
                                ))}

                            </Pie>

                            <Tooltip />
                            <Legend />

                        </PieChart>
                    </ResponsiveContainer>

                ) : (

                    <div className="text-center py-5">
                        <h5 className="text-muted">
                            No appointment data available
                        </h5>
                    </div>

                )}

            </div>

        </div>
    );
}

export default DashboardCharts;