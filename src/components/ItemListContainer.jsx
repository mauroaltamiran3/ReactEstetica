import { products } from '../mocks/products.json';
import { CartIcon } from './CartWidget';
import './ItemListContainer.css';

export function ItemListContainer() {

    function mostrarVariablePrecio(precioInicial, variablePrecio) {
        const precioCambiado = (precioInicial * variablePrecio).toFixed(0);

        if ( precioCambiado ) {
            return (
                <>
                    <section>
                        <span style={{opacity: '0.7', fontSize: '1rem', textDecorationLine: 'line-through'}}>
                            ${precioInicial}
                        </span>

                        <div style={{display:'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center'}}>
                            <strong>
                                ${(precioInicial * variablePrecio).toFixed(0)}
                            </strong>
                            <span style={{color: '#379777', fontSize: '0.95rem'}}>
                                %{(100 - (variablePrecio * 100)).toFixed(0)} OFF
                            </span>
                        </div>
                    </section> 
                </>
            )
        } else {
            return precioInicial.toFixed(0);
        }
    }

    return (
        <main className='itemList'>
            <ul className='itemList-products'>
                {products.map( product => (
                    <li className='itemList-products-card' key={product.id}>
                        <img
                        className='itemList-products-card-img'
                        src={product.image}
                        alt={product.title} />

                        <div className='itemList-products-card-info'>
                            <strong>{product.title}</strong>
                            {mostrarVariablePrecio(product.price, 0.9)}
                        </div>
                        <div>
                            <button className='itemList-products-card-cartButton'>
                                <CartIcon />
                            </button>
                        </div>
                    </li>
                ) )}
            </ul>
        </main>
    )
}