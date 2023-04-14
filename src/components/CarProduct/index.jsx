import styles from "./cartproducts.module.scss";

function CarProduct({producto}) {
	return (
		<>
			<img src={producto.images[0]} alt='' className={styles.imagen} />
			<p className={styles.cart}>{producto.title}</p>
			<p className={styles.cart}>{producto.price}</p>
			<p className={styles.cart}>{producto.quantity}</p>
			<p className={styles.cart}>{producto.quantity * producto.price}</p>
		</>
	)
}

export default CarProduct
