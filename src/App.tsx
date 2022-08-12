import { Routes, Route, Link } from 'react-router-dom'

import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

import { Contato } from './pages/Contato'
import { Empresa } from './pages/Empresa'
import { Home } from './pages/Home'
import { Newproject } from './pages/Newproject'
import { Projects } from './pages/Projects'
import { Project } from './pages/project'

function App() {
  return (
   <>
   <Navbar />  {/*Componente que armazena o nav, para trocar as paginas */}

   
   <Container height={75}> {/*Componente que armazena todas as rotas */}
   <Routes >
    <Route path="/" element={<Home />}/> 
    <Route path="/contato" element={<Contato />} />
    <Route path="/empresa" element={<Empresa />} />
    <Route path="/newproject" element={<Newproject />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="project/:id" element={<Project />} />
   </Routes>
   </Container>
   
    <Footer /> {/*Componente de Footer */}
    </>
  )
}

export default App
