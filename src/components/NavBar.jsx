import { CartWidget } from "./CartWidget";
<<<<<<< HEAD
import './NavBar.css';
import { Link } from 'react-router';
=======
import './NavBar.css'
>>>>>>> 5b7b3807fa5e1f5d540a86503180e44fd5863797

export function NavBar() {
    return (
    <header className="nav-header">
<<<<<<< HEAD
        <Link to='/' className="nav-header-logo">Estética Samman</Link>
        <nav className="nav-header-categories">
            <ul className="nav-header-categoriesList">
            <li><Link to='/category/manicuria'>Manicuría</Link></li>
            <li><Link to='/category/maquillaje'>Maquillaje</Link></li>
            <li><Link to='/category/spa'>Spa</Link></li>
            <li><Link to='/category/cabello'>Cabello</Link></li>
            </ul>
        <div className="cart-widget">
            <CartWidget />
        </div>
=======
        <p className="nav-header-logo">Estética Samman</p>
        <nav className="nav-header-menu">
            <ul className="nav-header-menuList">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
>>>>>>> 5b7b3807fa5e1f5d540a86503180e44fd5863797
        </nav>
    </header>
    )
}