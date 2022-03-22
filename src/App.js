import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"


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