import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

export function ItemDetailContainer() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const url = '/src/mocks/products.json';
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const foundProduct = data.products.find(item => item.id === parseInt(productId));
                setProduct(foundProduct);
            })
            .catch(err => console.error('Error fetching product:', err));
    }, [productId]);

    const handleAddToCart = () => {
        // Simular agregar producto (test)
        console.log(`Añadido ${quantity} ${product.title} al carrito`);
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="item-detail">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div>
                <label htmlFor="quantity">Cantidad:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                />
            </div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetailContainer;