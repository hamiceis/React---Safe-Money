import styled from "styled-components";

interface InputProps {
  text?: string;
  value?: string;
  name?: string;
  options?: string;
  handleOnChange?: () => void;
}


export function Select({text, name, options, handleOnChange, value}: InputProps) {
  return (
    <FormControl>
      <label htmlFor={name}> {text}:</label>
      <select name={name} id={name}>
          <option>Selecione uma opção</option>
      </select>
    </FormControl>
  )
}


const FormControl = styled.div`

display: flex;
flex-direction: column;
margin-bottom: 1em;

& label {
  margin-bottom: .6em;
  font-weight: bold;
}

& select {
  padding: .7em;
  border-radius: 0;
  border: none;
}


`