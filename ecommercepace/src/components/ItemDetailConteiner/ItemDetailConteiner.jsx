import { useAsync } from "../../hooks/useAsync"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../sevices/firebase/firestore/products'
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () =>{
    const { itemId } = useParams()
    const asyncFunction = () => getProductById(itemId)

    const { data: product, loading, error} = useAsync(asyncFunction, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar el producto...</h1>
    }

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...product}/>
            
        </div>
    )
}

export default ItemDetailConteiner

