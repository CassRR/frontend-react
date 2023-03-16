import React from "react";


const ProductList =() =>{
    return (
    <div>
            {products.map((product) =>(<h5>{product.title}</h5>))} 
        
        </div>
    )
};
export default ProductList;