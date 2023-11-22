import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../sevices/firebase/firebaseConfig"
import { useNotification } from "../../notification/NotificationContext"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart} = useCart()
    const { setNotification } = useNotification()

    
    const createOrder = async (userData) => {
        try{
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name ,
                },
                items: cart,
                total
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(),'in', ids))
    
    
            const {docs} = await getDocs(productsRef)
           
            docs.forEach( async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb  >= prodQuantity) {
                    
                    batch.update(documentSnapshot.ref , { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...fields})
                }
    
                if(outOfStock.length === 0) {
                    const orderRef = collection(db, 'orders')
    
                    const {id} = await addDoc(orderRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else{
                    console.log(`No hay mas stock`)
                }
            })
        } catch (error) {
            setNotification(`success`, `Hubo un error al generar su orden`)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h1> Generando orden ...</h1>
    }
    if(orderId) {
        return <h1> ID de su orden es : {orderId} </h1>
    }

    return (
        <>
            <h1>Para finalizar la compra, llena el proximo formulario :</h1>
            <h2>poner el form</h2>
            <ContactForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout
