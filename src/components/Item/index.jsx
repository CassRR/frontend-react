import { useEffect, useState } from "react";


function Item() {
    const [products, setProducts] = useState([])
        ;


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    

    return (
        <div>
            {products.map((product) =>(<h5>{product.title}</h5>))} 
        
        </div>
        
    
    );



}
export default Item