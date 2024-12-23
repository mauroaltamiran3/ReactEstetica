import { CartWidget } from "./CartWidget";
import './NavBar.css';
import { Link } from 'react-router';

export function NavBar() {
    return (
    <header className="nav-header">
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
        </nav>
    </header>
    )
}