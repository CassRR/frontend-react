import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection} from "firebase/firestore";
import db from "../db/firebase-config";



const ProductItem=()=> {
     const{id}=useParams();
    const [items, setItems] = useState([]);
    const itemsRef=collection(db, "items");

    
    
        const getItems=async()=> {
            try{
            const getItems = await getDocs(itemsRef);
             const itemsCollection =await getDocs(itemsRef);
             const items= itemsCollection.docs.map((doc)=>({...doc.data(),id:doc.id}));
             
            }catch(error){
                console.log(error)
             }
        }
        useEffect(() => {
            getItems()
        }, []);
        console.log(items)
    
    if (items == null){
        return (<div>Producto no encontrado</div>)
    } else {
        return (
        
            <div>
                <h4>{product.title}</h4>
               <p>${product.price}</p>
               <p>{product.category}</p>
               <p>${product.description}</p>
               <img src={product.images[0]} alt={product.title}/>
           </div>
           )
    }
   
    

    
  


}
export default ProductItem;