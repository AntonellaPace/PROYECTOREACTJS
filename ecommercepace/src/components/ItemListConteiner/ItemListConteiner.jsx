import { memo } from 'react'
import { useAsync } from '../../hooks/useAsync'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../sevices/firebase/firestore/products'

const MemoizedItemList = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()


    const asyncFunction = () => getProducts (categoryId) 

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])
    if(loading) {
        return <h1>Cargando...</h1>
    }
    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <MemoizedItemList products={products}/>
        </div>
    )
}
export default ItemListContainer

