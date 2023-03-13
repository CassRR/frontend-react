import ItemCount from "../ItemCount";

const ItemListcontainer = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
            <ItemCount />
        </div>
    )
};
export default ItemListcontainer