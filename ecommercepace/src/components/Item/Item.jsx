import { Link } from "react-router-dom"
import classes from "./Item.module.css"


const Item = ({ id, name, img, price}) => {

    const handleClick = (e) => {
        e.stopPropagation()
    }

    return(
        <div onClick={handleClick} className= {classes.item} >
            <h1> {name} </h1>
            <img src={img} />
            <h1> ${price}</h1>
            <Link to = {`/item/${id}`} > Ver detalle </Link>
        </div>
    )
}

export default Item