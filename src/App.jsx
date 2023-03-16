import "./App.module.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import axios from "axios";
import Item from "./components/Item";
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductsList";


function App() {

  const funcionClick = (name) => {
    alert("Estàs en " + name);
  };



  return (
    <div>
       <NavBar handleClick={funcionClick} />
      <ItemListContainer text="Bienvenido a Green Garden" />
      <Routes>
      <Route path="/productos"element={<ProductList products={products}/>}/>
      </Routes>


    </div >

  );
};

export default App;
