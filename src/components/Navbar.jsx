import { logoutUser } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <h2>Lead CRM</h2>
      <button onClick={() => { logoutUser(); navigate("/login"); }}>Logout</button>
    </nav>
  );
}
