import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetailContainer.css';
import { getProductById} from '../../firebase/db';
import { CartWidget } from '../CartWidget/CartWidget';
import '../CartWidget/CartWidget.css';

export function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const { productId } = useParams();
    

    useEffect(() => {

        getProductById(productId)
            .then(product => {
                setProduct(product);
            });
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <><div className="cart-widget">
            <CartWidget />
        </div><div className="item-detail">
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p style={{ fontSize: '0.8rem', marginBottom: '1rem', fontStyle: 'italic' }}>Precio: ${product.price}</p>

                <ItemCount item={product} />
            </div></>
    );
}

export default ItemDetailContainer;