import ItemList from "./ItemList"
import { useState, useEffect} from "react"
import { toast } from "react-toastify"
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

const ItemListContainer = () => {
    
    const [carga, setCarga] = useState(true);
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    
    

     useEffect(() => {
        
        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(objetos.id)
            }, 2000)
        })
        promesa
            .then(()=>{
                setProductos(objetos)
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
            <div className="contenedor">
                <h2>{carga ? "Cargando..." : <ItemList productList={productos} />}</h2>
                
            </div>
        </>

    )
}

export default ItemListContainer