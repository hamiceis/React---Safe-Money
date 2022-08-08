import { Message } from "../../components/layout/Message";
import { useLocation } from 'react-router-dom'
import { Container } from "../../components/layout/Container";
import { LinkButton } from "../../components/layout/LinkButton";
import { ContainerProject, TitleContainer } from './styled.Projects'


export function Projects () {

 const location = useLocation()

 let message = ''

 if(location.state){
  message = 'Projeto criado com sucesso!'
 }

  return(
    <ContainerProject>
      <TitleContainer>
       <h1>Meus projetos</h1>
       <LinkButton to="/" text="criar Projeto" />
      </TitleContainer>
      {message && <Message msg={message} type="sucess"/>}

      <Container start="flex-start">
          <p>projetos...</p>
      </Container>
    </ContainerProject>
  )
}