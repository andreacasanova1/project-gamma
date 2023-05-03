import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Header from './views/Header'

function App() {

  return (
    <>
    <header>
      <h1>Guia de Estilos</h1>
      <Link to="/contact">Contacto</Link>
      <Link to="/">Home</Link>
      <Link to="/Header">Header</Link>
      <Link to="/Bottom">Header</Link>
      
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </main>
    </>
  )
}

export default App
