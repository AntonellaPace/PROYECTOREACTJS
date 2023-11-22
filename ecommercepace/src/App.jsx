import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationContext'
import Cart  from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {

  return (
    <>
    <NotificationProvider>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={< ItemListConteiner greeting={'Listado de Productos'} />} />
        <Route path='/category/:categoryId' element={< ItemListConteiner greeting={'Listado de Productos: '} />} />
        <Route path='/item/:itemId' element= {< ItemDetailConteiner />}/>
        <Route path='/cart' element= {< Cart />}/>
        <Route path='/checkout' element= {< Checkout />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </>

  )
}

export default App
