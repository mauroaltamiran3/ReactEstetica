/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import './ItemDetailContainer/ItemDetailContainer.css';

export function CartIcon({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, cantidad: 1 });
    }
  };

  return (
    <div onClick={handleAddToCart}>
      <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l14 1l-1 7h-13' />
      </svg>
    </div>
  );
}