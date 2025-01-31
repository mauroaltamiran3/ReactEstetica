/* eslint-disable react/prop-types */
import { CartIcon } from './CartIcon';
import './ItemListContainer/ItemListContainer.css';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget/CartWidget';
import './CartWidget/CartWidget.css';

export function ItemList({ items }) {
    return (
        <div className='itemList'>
            <div className="cart-widget">
                <CartWidget />
            </div>
            <ul className='itemList-products'>
                {items.map(item => (
                    <li key={item.id} className='itemList-products-card'>
                        <img className='itemList-products-card-img' src={item.image} alt={item.title} />
                        <div className='itemList-products-card-info'>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <Link to={`/product/${item.id}`} className='itemList-products-verDetalles'>Ver Detalles</Link>
                        </div>
                        <button className='itemList-products-card-cartButton'>
                            <CartIcon product={item} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}