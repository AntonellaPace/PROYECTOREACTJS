import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, price, stock, description}) => {
    return(
        <div>
            <p> {name} </p>
            <img src={img} />
            <p> ${price}</p>
            <p>Descrpcion del Producto: {description} </p>
            <ItemCount stock={stock} onAdd={ (cantidad) => console.log('cantidad agregada: ' + cantidad)} />
        </div>
    )
}

export default ItemDetail