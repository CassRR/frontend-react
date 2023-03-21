import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={styles.container}>
        <Link to="/"><img src="../imagenes/greenGarden1.jpg" className={styles.navBar_imagen_logo} /></Link>
         <Link to="/home" className={styles.alinearcart}> Home </Link>
        <Link to="/categorias"className={styles.alinearcart}>Categorías de productos </Link>
         <Link to= "/Cart"> <CartWidget /> </Link>
        </nav >
    );

};

export default NavBar
