import { Message } from "../../components/layout/Message";
import { useLocation } from 'react-router-dom'


export function Projects () {

 const location = useLocation()

 let message = ''

 if(location.state){
  message = 'Projeto criado com sucesso!'
 }

  return(
    <div>
      <h1>Meus projetos</h1>
      {message && <Message msg={message} type="sucess"/>}
    </div>
  )
}