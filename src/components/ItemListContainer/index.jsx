import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../Item";
import {collection, getDocs} from "firebase/firestore";
import db from "../../../db/firebase-config"; 
const ItemListcontainer = () => {
    const { category_id } = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const itemsRef = collection(db, "items")
            const getItems = await getDocs(itemsRef);
            const items = getItems.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(items)

        } catch (error) {
            console.log(error)
        }
    }
    const getProductsByCategory = async () => {
        try {
            const itemsRef = collection(db, "items")
            const getItems = await getDocs(itemsRef);
            const items = getItems.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(items.filter(x=> x.category == category_id))

        } catch (error) {
            console.log(error)
        }
    }
   useEffect(() => {
        if (category_id == null){
            getProducts()

        } else {
            getProductsByCategory();

    }    }, [category_id]);


    return (
        <div>
            {products.map((product) => { return <Item key={product.id} product={product} /> })}
        </div>
    );
}

export default ItemListcontainer;