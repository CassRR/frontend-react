import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getDoc,doc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import ItemCount from "../ItemCount";
import{CartContext}from"../../context/CartContext";
import styles from "./ProductItem.module.scss";
import {useContext} from 'react'


const ProductItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const{addProduct} =useContext(CartContext);
    const[goToCart, setgoToCart] =useState(false)
    
    
    const onAdd =(quantity) =>{
        setgoToCart(true);
        addProduct(product,quantity);
    }
    const getProduct = async () => {

        const docRef = doc(db, "items", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setProduct(docSnap.data())
        } else {
            console.log("The product is not avaible")
        }
    }

    useEffect(() => {
        getProduct();
    }, [id]);


    if (product == null){
        return (<div>Producto no encontrado</div>)
    } else {


    return (

       
            <div className={styles.itemcontainer}>
                
                <h4 >{product.title}</h4>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <img className={styles.image}src={product.images[0]} alt={product.title} />
                    <ItemCount onAdd={onAdd}/>
                 
            </div>

           
      
    )


}

}




export default ProductItem;