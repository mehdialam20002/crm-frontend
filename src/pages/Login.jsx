import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import { loginUser } from "../auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fix for browser autofill so no refresh needed
  useEffect(() => {
    const emailAuto = document.querySelector('input[type="email"]')?.value || "";
    const passAuto = document.querySelector('input[type="password"]')?.value || "";

    if (emailAuto) setEmail(emailAuto);
    if (passAuto) setPassword(passAuto);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      loginUser(res.data);

      // Redirect after login
      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
