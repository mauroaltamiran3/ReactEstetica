import { useCart } from '../../context/CartContext';
import './CartList.css';

function CartList() {
    const { cart, setCart } = useCart();

    const removeFromCart = (id) => {
        const newCart = cart.map(item => 
            item.id === id ? { ...item, cantidad: Math.max(item.cantidad - 1, 0) } : item
        ).filter(item => item.cantidad > 0);
    
        setCart(newCart);
    };

    const removeAllItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    };



    return (
        <div>
            <ul className="cart-list">
                {cart.map((product) => (
                    <li key={product.id} className="cart-item">
                        <span className="cart-item-title">
                            {product.title} - (x{product.cantidad} Unidades) - ${product.price * product.cantidad}
                        </span>
                        <div className="cart-buttons">
                            <button className="cart-btn btn-remove-one" onClick={() => removeFromCart(product.id)}>
                                Restar
                            </button>
                            <button className="cart-btn btn-remove-all" onClick={() => removeAllItem(product.id)}>
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartList;
