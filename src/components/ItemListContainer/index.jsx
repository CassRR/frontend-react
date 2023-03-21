import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import Item from "../Item";


const ItemListcontainer = () => {
     const{category_id}=useParams();
     const [products, setProducts] = useState([]);
    const getProducts=async()=> {
        try{
        const result = await fetch('https://dummyjson.com/products')
         const data=await result.json()
         setProducts(data.products);
        }catch(error){
            console.log(error)
         }
    }
    const getProductsByCategory=async()=> {
        try{
        const result = await fetch(`https://dummyjson.com/products/category/${category_id}`)
         const data=await result.json()
         setProducts(data.products);
        }catch(error){
            console.log(error)
         }
    }


    useEffect(() => {
        if (category_id == null){
            getProducts()

        } else {
            getProductsByCategory();
        }
    }, [category_id]);
    console.log(products)

    return   (
            <div>
                {products.map((product) =>{return<Item key ={product.id}product={product}/>})} 
            </div>
        );
};
export default ItemListcontainer;