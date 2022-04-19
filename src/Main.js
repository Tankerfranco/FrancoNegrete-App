import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Recibo from "./components/main/Recibo";
import Carrito from "./components/main/Carrito";

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
