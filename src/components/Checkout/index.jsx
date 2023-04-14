import { Button, CircularProgress } from "@mui/material";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../../db/firebase-config.js";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const { clear, cart, total } = useContext(CartContext);
  const [emailsCoinciden, setEmailsCoinciden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    emailConfirm: "",
    telefono: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const ordersCollectionRef = collection(db, "orders");
    const order = {
      buyer: cliente,
      items: cart,
      total: total(),
    };
    const doc = await addDoc(ordersCollectionRef, order);
    setOrderId(doc.id);
    clear();
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
  };

  useEffect(() => {
    confirmar();
  }, [cliente]);

  const confirmar = () => {
    if (
      cliente.email === cliente.emailConfirm &&
      cliente.email !== "" &&
      cliente.emailConfirm !== "" &&
      cliente.nombre !== "" &&
      cliente.telefono !== ""
    ) {
      setEmailsCoinciden(true);
    } else {
      setEmailsCoinciden(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress size={150} />
      </div>
    );
  }

  if (cart.length > 0 && orderId === null) {
    return (
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          className="inputField"
          name="nombre"
          value={cliente.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="inputField"
          name="email"
          value={cliente.email}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Confirmar Email"
          className="inputField"
          name="emailConfirm"
          value={cliente.emailConfirm}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Telefono"
          className="inputField"
          name="telefono"
          value={cliente.telefono}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submitButton"
          disabled={!emailsCoinciden}
          style={{ backgroundColor: emailsCoinciden ? "green" : "grey" }}
        >
          {emailsCoinciden ? "Enviar" : "Correos no coinciden"}
        </Button>
      </form>
    );
  }
  if (cart.length == 0 && orderId === null) {
    return (
      <h2 className="estilo-checkout">
        Porfavor confirme la compra previamente
      </h2>
    );
  }

  if (orderId !== null) {
    return (
      <>
        <h2 className="estilo-checkout">Compra registrada con exito!</h2>
        <p className="estilo-par-checkout">
          Gracias por tu compra, tu numero de orden es: {orderId}
        </p>
        <Link
          to="/"
          style={{ pointerEvents: emailsCoinciden ? "auto" : "none" }}
        >
          <Button variant="contained">Volver</Button>
        </Link>
      </>
    );
  }
}
export default Checkout;
