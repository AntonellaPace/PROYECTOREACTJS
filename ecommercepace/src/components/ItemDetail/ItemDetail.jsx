import { useState, useContext } from "react"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationContext"
import { Link } from "react-router-dom"

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)
    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
            setCount(count - 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {       
        const productToAdd = {
            id, name, price, quantity
        }

       addItem(productToAdd)
       setNotification('success', `Se agregaron ${quantity} ${name}`)
        
    }

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    isInCart(id) ? (
                        <Link to={'/cart'}> Ir al Carrito </Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
} 
export default ItemDetail