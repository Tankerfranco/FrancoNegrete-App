import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <main>   
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
