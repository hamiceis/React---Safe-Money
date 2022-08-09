import { Message } from "../../components/layout/Message";
import { useLocation } from 'react-router-dom'
import { Container } from "../../components/layout/Container";
import { LinkButton } from "../../components/layout/LinkButton";
import { ContainerProject, TitleContainer } from './styled.Projects'
import { ProjectCard } from "../../components/project/ProjectCard"; 
import { useState, useEffect } from "react";

type Props = {
  name: string;
  id: number;
  budget: string;
  category: { name: string};
  handleRemove: () => void | any
}

export function Projects () {

const [projects, setProjects] = useState([])


 const location = useLocation()
 let message = ''
 if(location.state){
  message = 'Projeto criado com sucesso!'
 }

 useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error))
 },[])

  return(
    <ContainerProject>
      <TitleContainer>
       <h1>Meus projetos</h1>
       <LinkButton to="/newproject" text="Criar Projeto" />
      </TitleContainer>
      {message && <Message msg={message} type="sucess"/>}

      <Container  start="flex-start">
         {projects && 
            projects.map((project: Props) => (
              <ProjectCard
               key={project.id}
               id={project.id}
               name={project.name}
               budget={project.budget}
               category={project.category.name}
               
              />
            ))}
      </Container>
    </ContainerProject>
  )
}