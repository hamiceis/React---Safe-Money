import { ProjectForm } from '../../components/project/ProjectForm'
import { ContainerProject, Title, Subtitle } from './styled.newproject'

export function Newproject() {
  return(
    <ContainerProject>
      <Title>Criar Projeto</Title>
      <Subtitle>Crie seu projeto para depois adicionar os serviços</Subtitle>
      <ProjectForm  btnText="Criar Projeto"/>
    </ContainerProject>
  )
}