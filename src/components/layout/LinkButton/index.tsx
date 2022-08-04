import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

export function LinkButton ({to, text} : Props){
  return (
    <StyleLink to={to}>
      {text}
      </StyleLink>
  )
}


const StyleLink = styled(Link)`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: #0cb815;
  }
`