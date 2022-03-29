import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [carga, setCarga] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", id)
      );
      getDocs(q)
        .then((resp) =>
          setProductos(
            resp.docs.map((p) => ({ productos: p.data(), id: p.id }))
          )
        )
        .catch((err) => toast.error(err))
        .finally(() => {
          setCarga(false);
        });
    } else {
      getDocs(collection(db, "productos"))
        .then((resp) =>
          setProductos(
            resp.docs.map((p) => ({ productos: p.data(), id: p.id }))
          )
        )
        .catch((err) => toast.error(err))
        .finally(() => {
          setCarga(false);
        });
    }
  }, [id]);

  return (
    <>
      <div className="contenedor">
        {carga ? <Loader /> : <ItemList productList={productos} />}
      </div>
    </>
  );
};

export default ItemListContainer;
