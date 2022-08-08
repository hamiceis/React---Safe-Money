import { ProjectForm } from '../../components/project/ProjectForm'
import { ContainerProject, Title, Subtitle } from './styled.newproject'
import { useNavigate } from 'react-router-dom'

export function Newproject() {

const navigate = useNavigate()

const createPost = (project: any) => {
    //Inicializa o SafeMoney e o servicos
    project.safemoney = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Redirect
      navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
      
    })
    .catch(error => console.log(error))
}

  return(
    <ContainerProject>
      <Title>Criar Projeto</Title>
      <Subtitle>Crie seu projeto para depois adicionar os serviços</Subtitle>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </ContainerProject>
  )
}