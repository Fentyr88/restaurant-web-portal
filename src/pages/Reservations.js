import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import logo from "../images/logo.jpg";
import "../styles/ReservationsStyles.css"; // Make sure to replace with the actual stylesheet for reservations

const Reservations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic here to handle reservation submission
    // You can send the reservation details to your backend or perform any other necessary actions
    console.log("Reservation submitted:", { name, email, phone, date, time, numberOfGuests });

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setNumberOfGuests("");
  };

  const handleCancel = () => {
    // Add logic here to handle reservation cancellation
    // You can navigate to another page or perform any other necessary actions
    console.log("Reservation cancelled");

    // Clear the form fields after cancellation
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setNumberOfGuests("");
  };

  return (
    <Layout>
      <div className={"container"}>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={"input"}
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={"input"}
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={"input"}
              placeholder="Teléfono"
              required
            />
          </div>
          <div>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={"input"}
              required
            />
          </div>
          <div>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className={"input"}
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="numberOfGuests"
              value={numberOfGuests}
              onChange={(event) => setNumberOfGuests(event.target.value)}
              className={"input"}
              placeholder="Número de invitados"
              required
            />
          </div>
          <button type="submit" className={"mainButton"}>
            Confirmar Reserva
          </button>
          <button
            className={"mainButton"}
            onClick={handleCancel}
          >
            Cancelar Reserva
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Reservations;
