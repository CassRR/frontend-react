import { useState } from "react";
import styles from "./itemcount.module.scss";
const ItemCount = () => {
    const [count, setCount] = useState(0);
    const suma = () => { setCount(count + 1) }
    const resta = () => { setCount(count - 1) }
    const vaciarCarrito = () => { setCount(0) }
    const agregarCarrito = () => { if (count >= 1) alert(`Agregaste ${count} productos al carrito`); }



    return (
        <div className={styles.Itembutton}>
            <button onClick={resta} className={styles.button} >-</button>
            <h1 className={styles.button}>{count}</h1>
            <button onClick={suma} className={styles.button}>+</button>
            <button onClick={vaciarCarrito} className={styles.button}>Vaciar Carrito</button>
            <button onClick={agregarCarrito} className={styles.button}>Agregar al carrito</button>
        </div >)
}

export default ItemCount;