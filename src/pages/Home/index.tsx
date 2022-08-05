import { ContainerSection, Title, SubTitle, Img } from './styled.Home'
import bgProject from '../../assets/imgs/logo1.png'
import { LinkButton } from '../../components/layout/LinkButton'

export function Home(){
  return(
    <ContainerSection>
      <Title>
        Bem-vindo ao <span>Safe Money</span>
      </Title>

      <SubTitle>
        Comece a gerenciar os seus projetos agora mesmo!
      </SubTitle>

      <LinkButton  to="/newproject"  text="Criar Projeto"/>

      <Img src={bgProject} alt="Logo do dinheiro no circulo"/>
      
    </ContainerSection>
  )
}