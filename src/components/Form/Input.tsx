import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  type?: string;
  text?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  handleOnChange?: any;
}


export function Input({type, text, name, placeholder, handleOnChange, value}: InputProps) {
  return (
    <FormControl>
      <label htmlFor={name}>
          {text}:
      </label>
      <input type={type}
             name={name}
             placeholder={placeholder} 
             value={value} 
             onChange={handleOnChange}/>
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

& input {
  padding: .7em;
  border-radius: 0;
  border: none;
}

& input::placeholder {
  color: #7b7b7b;
}

`