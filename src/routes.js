import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Userdash from './pages/userDash'

const RoutesPages = ({logoutFunction, validateUser, navigate}) => {
  return (
    <Routes>
        <Route path='/' element={<Login navigate={navigate}/>}/>
        <Route path='/register' element={<Register navigate={navigate}/>}/>
        <Route path='/userdash' element={<Userdash logoutFunction={logoutFunction} validateUser={validateUser}/>}/>
    </Routes>
  )
}

export default RoutesPages