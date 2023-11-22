import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore' 
import { db } from '../../sevices/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { createAdaptedCategories } from '../adapters/createAdaptedCategory.js';


const NavBar = () => {
    const [categories, setCategories] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    return createAdaptedCategories(doc)
                    
                })

                setCategories(categoriesAdapted)
            })
            
    }, [])
    
    return (
        <nav>
            <h1 onClick={() => navigate('/')} >CARPINTERIA G&A</h1>
            <div>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</NavLink>
                )}
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar