import { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import { Message } from "../../components/layout/Message";
import { Container } from "../../components/layout/Container";
import { Loading } from '../../components/layout/Loading'
import { LinkButton } from "../../components/layout/LinkButton";
import { ContainerProject, Title } from './styled.Projects'
import { ProjectCard } from "../../components/project/ProjectCard"; 

type Props = {
  name: string;
  id: number;
  budget: string;
  category: { name: string};
  handleRemove: () => void | any
}

type PropsProject = {
 id: string | number ;
}

export function Projects () {

const [projects, setProjects] = useState([])
const [removeLoading, setRemoveLoading] = useState<Boolean>(false)
const [projectMessage, setProjectMessage] = useState('')


 const location = useLocation()
 let message = ''
 if(location.state){
  message = 'Projeto criado com sucesso!'
 }

 useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch(error => console.log(error))
    }, 1000)
 },[])

//Logica para remover o Projeto pelo id
 const removeProject = (id: string) => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(_=> {
        setProjects(projects.filter((project: PropsProject) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch(error => console.log(error))
 }
 

  return(
    <ContainerProject>
    
      <Title>
       <h1>Meus projetos</h1>
       <LinkButton to="/newproject" text="Criar Projeto" />
      </Title>
      {message && <Message msg={message} type="sucess"/>}
      {projectMessage && <Message type="sucess" msg={projectMessage}/>}
    
      <Container content='flex-start' >
         {projects.length > 0 && 
            projects.map((project: Props) => (
              <ProjectCard
               key={project.id}
               id={project.id}
               name={project.name}
               budget={project.budget}
               category={project.category.name}
               handleRemove={removeProject}
              />
            ))}
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 && (
              <p>Não há projetos cadastrados!</p>
            )}
      </Container>
    </ContainerProject>
  )
}