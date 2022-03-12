import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({itemList}) => {
  const [producto, setProducto] = useState({})
  const [carga, setCarga] = useState(true)

  useEffect(()=>{
    const promesaDos = new Promise((res, rej)=>{
      setTimeout(()=>{
        res(itemList[0])
      }, 2000)
    })
    promesaDos
      .then(()=>{
        setProducto(itemList[0])
      })
      .catch(()=>{
        toast.error("No se pudo cargar.")
      })
      .finally(()=>{
        setCarga(false)
      })
  })

  
  return (
    <>
        <div className='detalleContenedor'>
          <h2 className='texto'>Detalles del producto:</h2>
          {carga ? <h2>"Cargando.."</h2> : <ItemDetail item={producto}/>}
          
        </div>
        
    </>
  )
}

export default ItemDetailContainer