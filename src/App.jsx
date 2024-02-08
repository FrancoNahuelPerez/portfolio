import './App.css'
import Animacion from './Animacion/Animacion.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio.jsx'
import Proyectos from './Proyectos/Proyectos.jsx'
import SobreMi from './SobreMi/SobreMi.jsx'
import Menu from './Menu/Menu'
import Tecnologias from './Tecnologias/Tecnologias.jsx'
function App() {

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/sobremi' element={<SobreMi/>}/>
        <Route path='/tecnologias' element={<Tecnologias/>}></Route>
      </Routes>
    </div>
  )
}

export default App
