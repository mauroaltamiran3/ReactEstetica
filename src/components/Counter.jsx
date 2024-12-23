import { useState, useEffect } from 'react';

export function Counter () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Puedes agregar lógica aquí si es necesario
    }, [])

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleAdd}>Agregar</button>
            <button onClick={handleSubtract}>Restar</button>
        </div>
    );
}
