import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";
import db from "../../../db/firebase-config";
import { InsertEmoticonOutlined } from "@mui/icons-material";
import ItemCount from "../ItemCount";


const ProductItem=()=> {
     const{id}=useParams();
    const [product, setProduct] = useState([]);
    
    const getProduct= async=>{
       
        const docRef= doc(db,"items",id)
        const docSnap= await getDoc(docRef)
        if(docSnap.exist()){
            setProduct(docSnap.data())
        } else{
            console.log("The document is not avaible")
        }
    }

    useEffect(() => {
        getItem ();
    },[id]);
    
    
   
        return (
    
            <div>
                <div>
                <h4 >{ product.title}</h4>
               <p>{product.price}</p>
               <p>{product.category}</p>
               <p>{product.description}</p>
               <p>${product.price}</p>
               <img src={product.images[0]} alt={product.title}/>
               </div>
            
                <ItemCount/>
           </div>
           )
    
   
        }

    
  



export default ProductItem;