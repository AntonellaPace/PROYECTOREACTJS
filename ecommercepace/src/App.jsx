import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={< ItemListConteiner greeting={'Listado de Productos'} />} />
        <Route path='/category/:categoryId' element={< ItemListConteiner greeting={'Listado de Productos: '} />} />
        <Route path='/item/:itemId' element= {< ItemDetailConteiner />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
