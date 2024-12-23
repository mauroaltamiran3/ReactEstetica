import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router';

export function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const url = '/src/mocks/products.json';
        
        fetch(url)
            .then(response => response.json())
            .then(res => {
                if (categoryId) {
                    const filteredItems = res.products.filter(item => item.category === categoryId);
                    setItems(filteredItems);
                } else {
                    setItems(res.products);
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