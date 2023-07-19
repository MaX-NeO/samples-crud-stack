import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products'
import Add from './pages/Add'
import Edit from './pages/Edit'
const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Products/>}/>
      <Route exact path='/add' element={<Add/>}/>
      <Route exact path='/edit/:productId' element={<Edit/>}/>
    </Routes>
    </>
  )
}
export default App;