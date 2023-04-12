import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemListcontainer from "../ItemListContainer";
import db from "../../../db/firebase-config";
import {collection, getDocs} from "firebase/firestore";



const Categorias=()=> {
     
    const [categories, setCategories] = useState([]);
    
        const getCategory=async()=> {
            try{
                 const itemsRef = collection(db, "categories")
            const getItems = await getDocs(itemsRef);
            const items = getItems.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setCategories(items);
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
                {categories.map((category) =><Link to={`/categorias/${category.title}`}><li key={category.id}>{category.title}</li></Link>)} 
            </ul>
        );
    
           
    }
 
export default Categorias;