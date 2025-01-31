/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { ItemList } from '../ItemList';
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { getProducts } from '../../firebase/db';

export function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const cart = useContext(CartContext);

    useEffect(() => {
            getProducts()
                .then(products => {
                    if (categoryId) {
                        const filteredItems = products.filter(item => item.category === categoryId);
                        setItems(filteredItems);
                    } else {
                        setItems(products);
                    }
                })
    }, [categoryId]);

    return (
        <div className='itemList'>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;