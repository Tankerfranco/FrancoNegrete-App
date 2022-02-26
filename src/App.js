import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App () {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Saludos" />
            <Main />
            <Footer />
        </>
    )
}

export default App