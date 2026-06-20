import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/AuthUtils";

function AdminRoute({ children }) {

    const role = getUserRole();

    if (role !== "ADMIN") {
        return <Navigate to="/" />;
    }

    return children;
}

export default AdminRoute;