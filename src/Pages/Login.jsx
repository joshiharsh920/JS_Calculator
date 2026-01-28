import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulate login (replace with real API call)
    if (email === "user@example.com" && password === "password123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
    //Setting user for further use.
     if (email === "user@example.com" && password === "password123") {
      // ✅ THIS is where user is set
      setUser({
        email: email,
        favorites: [],
        rentedMovies: []
      });

      // Redirect to My Account
      navigate("/account");
    } else {
      setError("Invalid email or password");
    }
  };

  if (isLoggedIn) {
    return <h2>Welcome, {email}!</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor:"White"
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
