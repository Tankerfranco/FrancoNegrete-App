import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { useParams} from "react-router-dom"

let objetos = [
  {
    id: 1,
    nombre: "Call of Duty",
    img: "/caratulaCall.jpg",
    precio: 60,
    descripcion: "Juego de simulacion ambientado en la primera guerra mundial.",
  },
  {
    id: 2,
    nombre: "Batman Arkhan",
    img: "/caratulaBatman.jpg",
    precio: 60,
    descripcion:
      "Batman enfrentandose a sus villanos mas iconicos en el asilo de Arkhan.",
  },
  {
    id: 3,
    nombre: "Final Fantasy IV",
    img: "/caratulaFinal.jpg",
    precio: 30,
    descripcion:
      "Final Fantasy 4 es un jrpg en donde puedes subir de nivel y enfrentar monstruos.",
  },
  {
    id: 4,
    nombre: "World of Warcraft",
    img: "/caratulaWow.jpg",
    precio: 60,
    descripcion: "MMORPG continuacion de la aclamada saga warcraft.",
  },
];

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [carga, setCarga] = useState(true)
  const {id} = useParams()
  const resultado = objetos.filter(objeto => objeto.id === {id})
  console.log({id})
  console.log(id)
  

  

  useEffect(()=>{
    const promesaDos = new Promise((res, rej)=>{
      setTimeout(()=>{
        res(resultado)
      }, 2000)
    })
    promesaDos
      .then(()=>{
        setProducto(resultado)
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
          {carga ? <h2>"Cargando.."</h2> : <ItemDetail item={producto}/>}
          
        </div>
        
    </>
  )
}

export default ItemDetailContainer