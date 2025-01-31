import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, getTotal } = useCart();

  return (
    <div className="cart-container">
        {cart.length === 0 ? (
                <>
                <p style={{ textAlign: 'center' }}>No hay productos en el carrito</p>
                <Link className="btn-checkout" to='/'>Ir a ver productos</Link>
                </>
            ) : (
              <><CartList /><h3 className="cart-total">Total: ${getTotal()}</h3><Link className="btn-checkout" to='/checkout'>Ir al checkout</Link></>
            )}
    </div>
  );
}

export default Cart;
