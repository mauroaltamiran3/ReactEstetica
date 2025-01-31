import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../firebase/db";
import { Link } from "react-router";
import './Checkout.css';

export function Checkout() {
    const { cart, getTotal, clearCart } = useCart();
    const [orderId, setOrderId] = useState(null); //
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const [name, email, phone] = form;

        const order = {
            buyer: {
                name: name.value,
                email: email.value,
                phone: phone.value,
                date: serverTimestamp()
            },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        };

        try {
            const orderId = await createOrder(order);
            setOrderId(orderId);
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-container">
                <h1>¡Compra finalizada!</h1>
                <div className="order-details">
                    <p>Gracias por tu compra. Aquí están los detalles de tu orden:</p>
                    <p><strong>ID de la orden:</strong> {orderId}</p>
                    <h3>Productos comprados:</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <strong>{item.title}</strong> - ${item.price.toFixed(2)} x {item.cantidad} = ${(item.price * item.cantidad).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
                <p><strong>Total:</strong> ${getTotal().toFixed(2)}</p>
                <Link onClick={clearCart} to='/'>Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="tel" name="phone" placeholder="Teléfono" required />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Procesando..." : "Finalizar Compra"}
                </button>
            </form>
        </div>
    );
}