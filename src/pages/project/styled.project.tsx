import styled from "styled-components";

export const Project_details = styled.div`
padding: 1em;


& h1, h2, p {
  margin-bottom: .5em;
}

& h1 {
  background-color: #222;
  color: #0cb815;
  padding: .4em;
}

& span {
  font-weight: bold;
}

& .details_container,
  .service_form_container {
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom: 1.2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .projec_info {
    width: 100%;
  }

`

export const Button = styled.button`

  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.5s;
  cursor: pointer;
  max-height: 40px;
  border: none;

  &:hover {
    color: #0cb815;
  }
`