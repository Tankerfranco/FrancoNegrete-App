import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Recibo from "./Recibo";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <main>   
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/recibo" element={<Recibo />} />
      </Routes>
    </main>
  );
};

export default Main;
