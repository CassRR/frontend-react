import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import Item from "../Item";


const ItemListcontainer = () => {
     const{category_id}=useParams();
     const [products, setProducts] = useState([]);
    
     const getProducts=async()=> {
            try{
            const getItems = await getDocs(itemsRef);
            const items= getItems.docs.map((doc)=>({...doc.data(),identificador:doc.id}));
            setProducts(items)
             
            }catch(error){
                console.log(error)
             }
        }
     useEffect(() => {
       
            getProducts();
    },[]);
    

    return   (
            <div>
                {products.map((product) =>{return<Item key ={product.id}product={product}/>})} 
            </div>
        );
    }
    
export default ItemListcontainer;