import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import logo from "../images/logo.jpg";
import "../styles/LoginStyles.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Layout>
    <div className={"container"}>
    <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={"input"}
            placeholder="Usuario o email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={"input"}
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className={"mainButton"}>
          Iniciar sesión
        </button>
        <button
          className={"mainButton"}
          onClick={handleRegister}
        >
          Registrarse
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default Login;
