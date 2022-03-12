import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App () {
    return (
        <>
            <NavBar />
            <Main />
            <Footer />
            <ToastContainer/>
        </>
    )
}

export default App