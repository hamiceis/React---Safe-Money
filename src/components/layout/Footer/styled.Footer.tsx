import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;
`

export const Social_list = styled.ul`

display: flex;
justify-content: center;
list-style-type: none;
`

export const Social_li = styled.li`
  margin: 0 1em;
  

  &:hover {
    color:#0cb815;
    cursor: pointer;
  }

  & svg {
    font-size: 1.5em;
  }
`

export const Copy = styled.p`

margin-top: 2em;

& span {
  font-weight: bold;
  color: #0cb815;
}

`