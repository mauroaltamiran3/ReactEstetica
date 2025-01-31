import { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="nav-header">
            <div className="nav-header-container">
                <Link to='/' className="nav-header-logo">Estética Samman</Link>
                
                <button className="nav-menu-toggle" onClick={toggleMenu}>
                    <span className="nav-menu-icon">&#9776;</span>
                </button>

                <nav className={`nav-header-categories ${isMenuOpen ? "open" : ""}`}>
                    <ul className="nav-header-categoriesList">
                        <li><Link to='/category/manicuria' onClick={toggleMenu}>Manicuría</Link></li>
                        <li><Link to='/category/maquillaje' onClick={toggleMenu}>Maquillaje</Link></li>
                        <li><Link to='/category/spa' onClick={toggleMenu}>Spa</Link></li>
                        <li><Link to='/category/cabello' onClick={toggleMenu}>Cabello</Link></li>
                    </ul>
                    
                </nav>
            </div>
        </header>
    );
}