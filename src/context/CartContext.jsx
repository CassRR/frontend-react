import React,{useState, useContext} from "react";
 export const CartContext = React.createContext([]);


const CartProvider = ({children}) =>{
    const[ cart, setCart] =useState([])


    const clear = ()=>setCart([]); 
    const removeProduct =(id)=>setCart(cart.filter(product=>product.id!==id));
   
   const addProduct =(item,newQuantity) =>{
    const newCart = cart.filter(prod=>prod.id!==item.id);
    newCart.push({...item,quantity:newQuantity});
    setCart(newCart)
   }
   const total =()=>{
    return cart.reduce((total, item) => total +( item.quantity * item.price),0); 
   }
   
    return(
        <CartContext.Provider value= {{
        clear,
        addProduct,
        removeProduct,
        cart,
        total
        }}>
         {children}
        </CartContext.Provider>
    )
}
export default CartProvider