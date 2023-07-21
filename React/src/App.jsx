import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/Admin/Add'
import Edit from './pages/Admin/Edit'
import  Feedback  from './pages/Feedback'
import Home from './pages/Home'
import Dashboard from './pages/Admin/Dashboard'
const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/admin/dashboard' element={<Dashboard/>}/>
      <Route exact path='/admin/add' element={<Add/>}/>
      <Route exact path='/admin/edit/:productId' element={<Edit/>}/>
      <Route exact path='/feedback' element={<Feedback/>}/>
    </Routes>
    </>
  )
}
export default App;