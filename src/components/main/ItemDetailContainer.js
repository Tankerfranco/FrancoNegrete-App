import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { db } from "../hook/Firebase";
import { getDoc, doc} from "firebase/firestore";



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [carga, setCarga] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const docRef = doc(db, "productos", id)
    getDoc(docRef)
      .then((res)=> setProducto(res.data()))
      .catch((err) => {toast.error(err)})
      .finally(() => {
        setCarga(false)
      })
  }, [id])
  
  return (
    <>
        <div className='detalleContenedor'>
          {carga ? <Loader/> : <ItemDetail producto={producto}/>}          
        </div>
        
    </>
  )
}

export default ItemDetailContainer