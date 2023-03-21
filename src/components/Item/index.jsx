import { Link } from "react-router-dom";
import styles from "./item.module.scss";

const Item=({product})=> {
    return(
    
    <div className={styles.itemcontainer}>
        <h4> <Link to={`/productos/${product.id}`}>{product.title}</Link></h4>
        <img src={product.images[0]} alt={product.title}/>
        <p>${product.price}</p>
        <p><Link to={`/categorias/${product.category}`}>{product.category}</Link></p>
       
    </div>
    

    )
  


}
export default Item;