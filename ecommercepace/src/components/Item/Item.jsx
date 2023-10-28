import { Link } from "react-router-dom"
import classes from "./Item.module.css"


const Item = ({ name, img, price}) => {
    return(
        <div className= {classes.item} >
            <p> {name} </p>
            <img src={img} />
            <p> ${price}</p>
            <Link to = {'/item/${id}'} > ver detalle </Link>
        </div>
    )
}

export default Item