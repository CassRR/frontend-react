import "./App.module.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import axios from "axios";
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";
import ProductItem from "./components/ProductItem";
import Categorias from "./components/Categorias";


function App() {

  return (
    <div>
       <NavBar  />
      <Routes>
      <Route path="/"  element={<ItemListContainer/>}></Route>
      <Route path="/home" element={<h3>Green Garden, todo para tus plantitas.</h3>}></Route>
        <Route path="/categorias" element={<Categorias/>}></Route>
        <Route path="/categorias/:category_id" element={<ItemListContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/productos/:id" element={<ProductItem />}></Route>

        </Routes>      
   


    </div >

  );
};

export default App;
