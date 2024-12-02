import { CartWidget } from "./CartWidget";
import './NavBar.css'

export function NavBar() {
    return (
    <header className="nav-header">
        <p className="nav-header-logo">Estética Samman</p>
        <nav className="nav-header-menu">
            <ul className="nav-header-menuList">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    </header>
    )
}