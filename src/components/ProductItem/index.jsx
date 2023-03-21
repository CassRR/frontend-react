import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductItem=()=> {
     const{id}=useParams();
    const [product, setProduct] = useState(null);
    
        const getProduct=async()=> {
            try{
            const result = await fetch(`https://dummyjson.com/products/${id}`)
             const data=await result.json()
             setProduct(data);
            }catch(error){
                console.log(error)
             }
        }
        useEffect(() => {
            getProduct()
        }, []);
        console.log(product)
    
    if (product == null){
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