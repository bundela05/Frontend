import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'
import { Route,Routes } from 'react-router-dom'
import Err from './Pages/Err'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
  <Route path='/' element={<Landing/>}></Route>
  <Route path='*' element={<Err/>}></Route>
</Routes>
    </>
  )
}

export default App
