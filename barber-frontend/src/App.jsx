import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BarberList from "./pages/BarberList";
import ServiceList from "./pages/ServiceList";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import AddBarber from "./pages/AddBarber";
import AddService from "./pages/AddService";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import EditBarber from "./pages/EditBarber";
import EditService from "./pages/EditService";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/barbers"
          element={
            <ProtectedRoute>
              <BarberList />
            </ProtectedRoute>
          }
        />
        <Route path="/services" element={<ServiceList />} />
        <Route
          path="/book-appointment"
          element={<BookAppointment />}
        />
        <Route
          path="/appointments"
          element={<MyAppointments />}
        />
        <Route
          path="/add-barber"
          element={
            <AdminRoute>
              <AddBarber />
            </AdminRoute>
          }
        />
        <Route
          path="/add-service"
          element={
            <AdminRoute>
              <AddService />
            </AdminRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            <AdminRoute>
              <AddUser />
            </AdminRoute>
          }
        />
        <Route
          path="/users"
          element={
            <AdminRoute>
              <UserList />
            </AdminRoute>
          }
        />

        <Route
          path="/edit-user/:id"
          element={<EditUser />}
        />

        <Route
          path="/edit-barber/:id"
          element={
            <AdminRoute>
              <EditBarber />
            </AdminRoute>
          }
        />
        <Route
          path="/edit-service/:id"
          element={
            <AdminRoute>
              <EditService />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />




      </Routes>


    </BrowserRouter>
  );
}

export default App;