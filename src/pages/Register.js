import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
import Layout from "./../components/Layout/Layout";


const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    setFullname("");
    setPasswordConfirm("");
    setEmail("");
    setPhoneNumber("");
  };

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <Layout>
    <div className={"container"}>
      <form className={"form"} onSubmit={handleSubmit}>
        <label className={"labelTitle"}>
          ¡Registrate gratis ahora!
        </label>
        <div className={"formContainerInputs"}>
          <div className={"formContents"}>
            <label className={"label"}>Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Usuario"
              className={"input"}
              required
            />
            <label className={"label"}>
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              placeholder="Nombre Completo"
              className={"input"}
              required
            />
            <label className={"label"}>Telefono</label>
            <input
              type="phone"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="Telefono celular"
              className={"input"}
              required
              pattern="^\d{10}$"
              title="El teléfono debe contener 10 números."
            />
          </div>

          <div className={"formContents"}>
            <label className={"label"}>
              Correo Electronico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Correo Electronico"
              className={"input"}
              required
            />
            <label className={"label"}>Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Contraseña"
              className={"input"}
              required
              pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
              title="La contraseña debe tener al menos 8 caracteres incluyendo una letra mayúscula y un número."
            />

            <label className={"label"}>
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              placeholder="Contraseña"
              className={"input"}
              required
              pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
              title="La contraseña debe tener al menos 8 caracteres incluyendo una letra mayúscula y un número."
            />
          </div>
        </div>
        <center>
          <div className={"buttonsContainer"}>
            <button type="submit" className={"mainButton"}>
              Registrarme
            </button>
            <button
              className={"secondaryButtonRegister"}
              onClick={handleGoBack}
            >
              Volver
            </button>
          </div>
        </center>
      </form>
    </div>
    </Layout>
  );
};

export default RegisterPage;
