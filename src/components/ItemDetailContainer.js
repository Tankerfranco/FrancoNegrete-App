import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import {PRODUCTS} from "../mock/Data"
import Loader from "./Loader"



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [carga, setCarga] = useState(true)
  const {id} = useParams() 
  
   

 
  useEffect(()=>{
    const promesaDos = new Promise((res, rej)=>{
      setTimeout(()=>{
        if(id){
          const filtro = PRODUCTS.filter(product => product.id == id)
          res(filtro[0])
        }
      }, 2000)
    })
    promesaDos
      .then((res)=>{
        setProducto(res)
      })
      .catch(()=>{
        toast.error("No se pudo cargar.")
      })
      .finally(()=>{
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