import { useState } from "react";
import styles from "./itemcount.module.scss";
const ItemCount = ({onAdd}) => {
    
    const [count, setCount] = useState(0);
    const suma = () => { setCount(count + 1) }
    const resta = () => { setCount(count - 1) }
    const agregarCarrito = () => { if (count >= 1) {
        onAdd(count);
        alert(`Agregaste ${count} productos al carrito`);}
     }



    return (
        <div className={styles.contador}>
            <button onClick={resta}  >-</button>
            <h1 >{count}</h1>
            <button onClick={suma}>+</button>
            <button onClick={agregarCarrito} >Agregar al carrito</button>
        </div >)
}

export default ItemCount;