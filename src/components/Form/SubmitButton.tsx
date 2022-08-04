import styled from "styled-components";

interface InputProps {
  text?: string;
}


export function SubmitButton({ text }: InputProps) {
  return (
    <>
      <BtnSubmit>{text}</BtnSubmit>
    </>
  )
}


const BtnSubmit = styled.button`

background-color: #222;
color: #fff;
padding: 0.7em 1.2em;
text-decoration: none;
transition: all .5s;
cursor: pointer;
border: none;

&:hover {
  color: #0cb815;
}

`