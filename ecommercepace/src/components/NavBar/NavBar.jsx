import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
            
        <nav >
            <Link to = '/' > CARPINTERIA G&A </Link>
            <section>
                <Link to = '/category/cocina'> COCINA </Link>
                <Link to = '/category/dormitorio'> DORMITORIO </Link>
                <Link to = '/category/baño'> BAÑO </Link>
                <Link to = '/category/comedor'> COMEDOR </Link>
            </section>
            <CartWidget />
        </nav>
    )
}
export default Navbar