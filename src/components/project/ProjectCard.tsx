import styled from "styled-components"
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { FormEvent } from "react";

interface ProjectCardProps {
  id?: number;
  name?: string;
  budget?: string | number;
  category?: string;
  handleRemove?: any;
}

export function ProjectCard ({ id, name, budget, category, handleRemove}: ProjectCardProps) {


  const remove = (e: FormEvent) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <ContainerCard>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className="categoryText">
        <span className={`${category?.toLowerCase()}`}></span>{category}
      </p>
      <CardActions>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </CardActions>
    </ContainerCard>
  )
}

//Styled Components

const ContainerCard = styled.div`

padding: 1em;
border: 1px solid black;
border-radius: 5px;
width: 24%;
margin: 0.5%;

& h4 {
  background-color: #222;
  color:#0cb815;
  padding: .4em;
  margin-bottom: 1.3em;
  font-size: 1.3em;
}

& p {
  color: #7a7a7a;
  margin-bottom: 1em;
}

& p span {
  font-weight: bold;

}

& .categoryText {
  display: flex;
  align-items: center;
}

& .categoryText span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 5px;
}

& .categoryText .infra {
  background-color: #ffaebc;
}

& .categoryText .desenvolvimento {
  background-color: #A0E7E5;
}

& .categoryText .design {
  background-color: #B4F8C8;
}

& .categoryText .planejamento {
  background-color: #fbe7c6;
}

`

const CardActions = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;

& a, button {
  text-decoration: none;
  border: none;
  background-color: #fff;
  color: #222;
  font-size: .9em;
  padding: .6em 1em;
  margin-right: 1em;
  cursor: pointer;
  border: 1px solid #222;
  justify-content: center;
  align-items: center;
  transition: all .5s;
}

& svg {
  margin-right: .5em;
}

& a:hover, button:hover  {
  background-color: #222;
  color: #0cb815;
}

`