import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/PaymentsStyles.css"; // Make sure to replace with the actual stylesheet for payments

const Payments = () => {
  const [cartItems, setCartItems] = useState([]); // Assuming cart items are stored as an array of objects
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePay = async () => {
    // Add logic here to handle payment via Wompi
    // You can redirect the user to the Wompi payment gateway or perform any other necessary actions
    console.log("Payment processing...");
    window.location.href = "https://wompi.com/es/co/";
    // Optional: Clear the cart and form fields after successful payment
    setCartItems([]);
    setDeliveryAddress("");
    setPhoneNumber("");
  };

  return (
    <Layout>
      <div className={"container"}>
        <h1>Carrito de Compras 🛒</h1>
        <br></br>
        <br></br>
        <br></br>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío. 🥺</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
         <br></br>
         <br></br>
         <br></br>


        <h2>Información del pedido #210111</h2>
        <br></br>
        <form>

        <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={"input"}
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={"input"}
              placeholder="Número de contacto"
              required
            />
          </div>
          
          <div>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className={"input"}
              placeholder="Dirección del pedido"
              required
            />
          </div>
         
        </form>

        <button type="button" onClick={handlePay} className={"mainButton"}>
          Pagar
        </button>
      </div>
    </Layout>
  );
};

export default Payments;