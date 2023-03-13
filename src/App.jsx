import "./App.module.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import axios from "axios";
import Item from "./components/Item";


function App() {

  const funcionClick = (name) => {
    alert("Estàs en " + name);
  };



  return (
    <div>
      <NavBar handleClick={funcionClick} />
      <ItemListContainer text="Bienvenido a Green Garden" />
      <Item />


    </div >
  );
};

export default App;
