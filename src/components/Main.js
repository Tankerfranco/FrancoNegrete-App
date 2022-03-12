import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

let objetos = [
  {
      id: 1,
      nombre: "Call of Duty",
      img: "/caratulaCall.jpg",
      precio: 60,
      descripcion: "Juego de simulacion ambientado en la primera guerra mundial."
  },
  {
      id: 2,
      nombre: "Batman Arkhan Asylum",
      img: "/caratulaBatman.jpg",
      precio: 60,
      descripcion: "Batman enfrentandose a sus villanos mas iconicos en el asilo de Arkhan."
  },
  {
      id: 3,
      nombre: "Final Fantasy IV",
      img: "/caratulaFinal.jpg",
      precio: 30,
      descripcion: "Final Fantasy 4 es un jrpg en donde puedes subir de nivel y enfrentar monstruos."
  },
  {
      id: 4,
      nombre: "World of Warcraft",
      img: "/caratulaWow.jpg",
      precio: 60,
      descripcion: "MMORPG continuacion de la aclamada saga warcraft."
  }
]



const Main = () => {
  return (
    <main >
      <ItemListContainer itemList={objetos} />
      <ItemDetailContainer itemList={objetos} />
    </main>
  )
}

export default Main