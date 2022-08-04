
import { ContainerDiv } from './styles.Container'

export interface Props {
  height?: number | string;
  start?: string 
  column?: string 
  children?: any;
}


export function Container ({ children } : Props ) {

return(
   <ContainerDiv >
    {children}
   </ContainerDiv>
  )
}