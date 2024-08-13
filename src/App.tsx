import './App.css'
import { Routes,Route, Router } from 'react-router-dom'
import Start from './pages/Start.tsx'
function App() {
  return(

   <Routes>
    
    <Route  path='/' element={<Start/>}  />
   </Routes>
  
  )
}

export default App
