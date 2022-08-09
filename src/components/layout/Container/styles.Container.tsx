import styled from "styled-components";

interface Props {
  height?: string | number;
  start?: string;
  column?: string;
}

export const ContainerDiv = styled.div<Props>`

width: 1200px;
display: flex;
justify-content: space-between;
margin: 0 auto;
flex-wrap: wrap;


min-height: ${props => `${props.height}%`};
justify-content: ${props => props.start};
flex-direction: ${props => props.column};
`