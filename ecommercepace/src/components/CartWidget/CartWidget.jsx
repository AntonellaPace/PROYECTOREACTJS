import cart from './assets/carritocompras.png'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={ () => navigate('/cart')}>
        <img src={cart} className='btn'/>
            {totalQuantity}
        </button>
    )
}
export default CartWidget

