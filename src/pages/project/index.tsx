import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { Loading } from "../../components/layout/Loading";
import { Message } from "../../components/layout/Message";
import { ProjectForm } from "../../components/project/ProjectForm";
import { Button, Project_details } from "./styled.project";

type PropsProject = {
  id: string,
  name: string,
  budget: string | number,
  safemoney: string | number;
}



export function Project() {

  const { id } = useParams()
  
  const [project, setProject] = useState<PropsProject[] | any>([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [message, setMessage]  = useState<string>()
  const [type, setType] = useState<string>()
  const [showServiceForm, setShowServiceForm] = useState(false)

  useEffect(() => {
           try {
            setTimeout(() => {
              async function fetchData(): Promise<void> {
                const response = await fetch(`http://localhost:5000/projects/${id}`, {
                  method: "GET",
                  headers: {
                    'content-type': 'application/json'
                  }
                })
                const data = await response.json()
                setProject(data)
              }
              fetchData()
            }, 4000)

          } catch (error) {
            console.log(error)
           }
  }, [id])

  const editPost = (project: PropsProject) => {

          setMessage('')

          //budget validation
          if(project.budget < project.safemoney){
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
          }

          async function fetchData() {
            const response = await fetch(`http://localhost:5000/projects/${project.id}`, {
              method: "PATCH",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(project),
            })
            const resp = await response.json()
            const data = await resp

            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado')
            setType('sucess')
          }

          fetchData()
  }
 
  const toggleProjectForm = () => {
      setShowProjectForm(!showProjectForm)
  }

  const toggleServiceForm = () => {
      setShowServiceForm(!showServiceForm)
  }
  return (
    <>
      {project.name ? 
      (
        
          <Container
            column="column" 
            content="flex-start"
            >
            {message && <Message type={type} msg={message}/>}
            <div className="details_container">
              <h1>Projeto: {project.name}</h1>

              <Button onClick={toggleProjectForm}>
               {!showProjectForm ? `Editar projeto` : `Fechar`}
              </Button>

              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria:</span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total do orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado</span> R${project.safemoney}
                  </p>
                </div>


              ) : (
                  <div className="project_info">
                    <ProjectForm
                      handleSubmit={editPost} 
                      btnText="Concluir edição"  
                      projectData={project}
                    />
                  </div>
              )}
            </div>
            
            <div className="service_form_container">

              <h2>Adicione um servico:</h2>
              
              <Button onClick={toggleServiceForm}>
               {!showServiceForm ? `Adicionar serviço` : `Fechar`}
              </Button>
              
              <div className="project_info">
                  {showServiceForm && <div>Formulário de serviço</div> }
              </div>
            </div>

            <h2>Serviços</h2>
            <div>
            <Project_details>
                <p>Itens de serviços</p>
            </Project_details>
            </div>
          </Container>
      ) : 
      (
        <Loading />
      )}
    </>
  )
}

