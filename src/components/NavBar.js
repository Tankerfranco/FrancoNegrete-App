import CartWidget from "./CartWidget"

function NavBar() {
    return <header className="header">
            <a href="#" className="titulo"><h1>Titulo</h1></a>
            <nav>
                <a className="token" href="#">Token1</a>
                <a className="token" href="#">Token2</a>
                <a className="token" href="#">Token2</a>   
            </nav>
            <CartWidget/>                    
    </header>
}

export default NavBar