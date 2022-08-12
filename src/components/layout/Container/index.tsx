
import { ContainerDiv } from './styles.Container'

export interface Props {
  height?: number | string;
  content?: string 
  column?: string 
  children?: any;
}


export function Container ({ height, column, content, children }: Props ) {

return(
   <ContainerDiv height={75 || height} content={content} column={column}>
    {children}
   </ContainerDiv>
  )
}