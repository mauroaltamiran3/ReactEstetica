import { CartContext } from './CartContext';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
  
      setCart(prevCart => {
          const isItemInCart = prevCart.find(product => product.id === item.id);
  
          if (isItemInCart) {
              return prevCart.map(product => 
                  product.id === item.id 
                  ? { ...product, cantidad: product.cantidad + item.cantidad }
                  : product
              );
          } else {
              return [...prevCart, item];
          }
      });
    };

    const getCantidad = () => {
        const cantidades = cart.map(item => item.cantidad);
        const cantidadTotal = cantidades.reduce((acc, cantidad) => acc + cantidad, 0);
        return cantidadTotal;
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, getCantidad, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}