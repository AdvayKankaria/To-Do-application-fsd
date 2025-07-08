
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/register`, { username, password });
      alert("User registered");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  if (token) return <Navigate to="/notes" />;
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

function Notes() {
  return <div>Notes Page - Protected</div>;
}

export default App;
