import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({products}) => {
    return(
        <div className= {classes.flex} >
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} { ... prod} />
                    )
                })
            }
        </div>

    )
}

export default ItemList 