import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // API Data State
  const [users, setUsers] = useState([]);

  // Fetch API Data using useEffect
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

  }, []);

  // Form Validation
  const validateForm = () => {

    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      setSuccess("Registration Successful!");

      // Clear Inputs
      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
    else {
      setSuccess("");
    }
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">
            Register
          </button>

        </form>

        {success && <p className="success">{success}</p>}

        <div className="api-data">

          <h2>Fetched API Users</h2>

          <ul>
            {users.slice(0, 5).map((user) => (
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;