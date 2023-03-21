import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemListcontainer from "../ItemListContainer";


const Categorias=()=> {
     
    const [categories, setCategories] = useState([]);
    
        const getCategory=async()=> {
            try{
            const result = await fetch(`https://dummyjson.com/products/categories`)
             const data=await result.json()
             setCategories(data);
            }catch(error){
                console.log(error)
             }
        }
        useEffect(() => {
            getCategory()
        }, []);
        console.log(categories)

       
        return   (
            <ul>              
                {categories.map((category) =><Link to={`/categorias/${category}`}><li key={category}>{category}</li></Link>)} 
            </ul>
        );
    
           
    }
 
export default Categorias;