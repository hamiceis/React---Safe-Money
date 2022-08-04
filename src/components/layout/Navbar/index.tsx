
import { Link } from 'react-router-dom'

import { Container } from '../Container'

import logo from '../../../assets/imgs/logo.png'
import { LogoImg, Li, List, NavbarStyle } from './styled.Navbar'



export function Navbar(){
  
  return (
    <NavbarStyle>
    <Container height={100}>
      <Link to="/">
        <LogoImg src={logo} alt="Logo do dindin" />
      </Link>

      <List>
        <Li>
          <Link to="/">Home</Link>
        </Li>

        <Li>
          <Link to="/projects">Projects</Link>
        </Li>

        <Li>
          <Link to="/empresa">Empresa</Link>
        </Li>

        <Li>
          <Link to="/contato">Contato</Link>
        </Li>

      </List>
      
    </Container>
   </NavbarStyle>
  )
}