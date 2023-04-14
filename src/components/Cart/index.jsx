import { useContext } from "react";
import styles from "./cart.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CarProduct from "../CarProduct";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cart, total } = useContext(CartContext);
  if (cart.length === 0) {
    return <h2 className={styles.checkout}>Tu carrito está vacío!</h2>;
  }
  return (
    <div>
      <div
        className={styles.cartContainer}
        style={{
          display: `grid`,
          gridTemplateRows: `120px, repeat(${cart.length}, 150px)`,
          gridTemplateColumns: `repeat(5, 20vw)`,
          placeItems: `center`,
          overflow: `hidden`,
          rowGap: `10px`,
        }}
      >
        <span></span>
        <span className={styles.encabezado}>Nombre</span>
        <span className={styles.encabezado}>Precio</span>
        <span className={styles.encabezado}>Cantidad</span>
        <span className={styles.encabezado}>Total x Producto</span>
        {cart.map((prod) => {
          return <CarProduct key={prod.id} producto={prod} />;
        })}

        <span className={styles.totalcarrito}>
          <span className={styles.totalcarritotext}>Total:</span>
          <span className={styles.totalcarritoamount}>${total()}</span>
          <span>
            <Link to="/checkout" className="link">
              <Button variant="contained" className={styles.checkout}>
                checkout
              </Button>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Cart;
