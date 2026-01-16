import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LeadDetails from "./pages/LeadDetails";

const isLoggedIn = () => localStorage.getItem("token");

export default function App() {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lead/:id" element={<LeadDetails />} />
    </Routes>
  );
}
