import styles from "./cartwidget.module.scss";
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import {useContext} from 'react'
import{CartContext}from"../../context/CartContext";

import {Link} from 'react-router-dom'



const CartWidget = () => {
    
    const{cart} =useContext(CartContext);
    
    return (
        <Link className='cart-container' to={`/cart`}>
			        < AiOutlineShoppingCart className={styles.cart} />
			<span className='cart-amount'> {cart.length}</span>
		</Link>



    );

};
export default CartWidget