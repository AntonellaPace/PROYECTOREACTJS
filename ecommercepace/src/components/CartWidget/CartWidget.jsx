import cart from './assets/carritocompras.png'

const CartWidget = () => {
    return (
        <button>
        <img src={cart} className='btn'/>
            0
        </button>
    )
}
export default CartWidget