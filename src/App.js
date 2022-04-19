import NavBar from "./components/header/NavBar"
import Main from "./Main"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./components/context/CartContext"


function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App