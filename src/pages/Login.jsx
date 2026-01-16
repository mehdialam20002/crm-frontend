
import { useState } from "react";
import api from "../api";
import { loginUser } from "../auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      loginUser(res.data);
      navigate("/");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <h2>Lead CRM Login</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password"
               value={password} onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
        <p>
  Don’t have an account? <Link to="/register">Register</Link>
</p>

      </form>
    </div>
  );
}
