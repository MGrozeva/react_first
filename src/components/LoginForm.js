import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        console.log("Login successful for:", username);
        onLogin(username); // Call the parent's function
      } else {
        console.log("Invalid credentials!");
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title">Login</h2>
      <div>
        <label className="description">
          User:
          <input className="dataentry"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="description">
          Pass: 
          <input className="dataentry"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button className="submintbtn" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;