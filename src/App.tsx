import { Routes, Route, Link } from 'react-router-dom'

import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

import { Contato } from './pages/Contato'
import { Empresa } from './pages/Empresa'
import { Home } from './pages/Home'
import { Newproject } from './pages/Newproject'
import { Projects } from './pages/Projects'

function App() {
  return (
   <>
   <Navbar />

   <Container height={75}>
   <Routes >
    <Route path="/" element={<Home />}/>
    <Route path="/contato" element={<Contato />} />
    <Route path="/empresa" element={<Empresa />} />
    <Route path="/newproject" element={<Newproject />} />
    <Route path="/projects" element={<Projects />} />
   </Routes>
   </Container>
    <Footer />
    </>
  )
}

export default App
