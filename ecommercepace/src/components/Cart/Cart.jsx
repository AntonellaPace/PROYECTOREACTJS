import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

export const Cart = () => {
    const { cart } = useCart()

    return (
        <div>
            <h1>Carrito de compras</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3> {prod.name} </h3>
                                <p> {prod.price} </p>
                                
                            </div>
                        )
                    })
                }
            </div>

            <Link to= '/checkout'> Ir a Precompra </Link>

        </div>
    )
}

export default Cart