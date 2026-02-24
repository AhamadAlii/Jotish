import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "testuser" && password === "Test123") {
      navigate("/list");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      
      {/* Top Branding */}
      <div className={styles.brandSection}>
      <h1 className={styles.brand}>Jotish.com</h1>
      </div>

      {/* Login Card */}
      <div className={styles.card}>
        <h2 className={styles.welcome}>Welcome Back</h2>
        <p className={styles.smallText}>Access Your Cosmic Dashboard</p>

        <input
          className={styles.input}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>

        
      </div>

      <div className={styles.footer}>
        © 2026 Jotish Pvt Ltd
      </div>
    </div>
  );
}

export default Login;