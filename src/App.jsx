import "./App.module.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import ProductItem from "./components/ProductItem";
import Categorias from "./components/Categorias";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/home" element={<ItemListContainer />}></Route>
          <Route path="/categorias" element={<Categorias />}></Route>
          <Route
            path="/categorias/:category_id"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/productos/:id" element={<ProductItem />}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
