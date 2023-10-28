import { useState } from "react"

const ItemCount = ({stock , onAdd}) => {
    const [count, setCount ] = useState (1)

    const decrementar = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const incrementar = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={decrementar}>decrementar</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
            <button onClick={incrementar}>incrementar</button>
        </div>

    )
}

export default ItemCount