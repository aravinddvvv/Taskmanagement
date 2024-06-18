import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alltasks from './pages/Alltasks'
import Importanttask from './pages/Importanttask'
import Completedtask from './pages/Completedtask'
import Incompletetask from './pages/Incompletetask'
import Signup from './pages/Signup'
import Login from './pages/Login'





const App = () => {
  
  return (
    <div className='bg-gray-600 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
          <Route  index element={<Alltasks/>} />
          <Route path='/importanttask' element={<Importanttask/>} />
          <Route path='/completedtask' element={<Completedtask/>} />
          <Route path='/incompletedtask' element={<Incompletetask/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App