/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCount.css';

export function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (item?.id) {
        addToCart({ ...item, cantidad: count });
    } else {
        console.error("Error: no hay ID.");
    }
  };

  return (
    <div className='itemCount'>
      <p>Cantidad: {count}</p>
      <div className='itemCount-btns'>
        <button style={{ backgroundColor: 'green' }} onClick={handleAdd}>
          Agregar
        </button>
        <button style={{ backgroundColor: 'red' }} onClick={handleSubtract}>
          Restar
        </button>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
}