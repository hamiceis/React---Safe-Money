import styled from "styled-components";

interface OptionProps {
  name: string;
  id: number;
}

interface InputProps {
  text?: string;
  value?: string | any;
  name?: string;
  options?: string[] | any;
  handleOnChange?: any;
}




export function Select({text, name, options, handleOnChange, value}: InputProps) {
  return (
    <FormControl>
      <label htmlFor={name}> {text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
          <option>Selecione uma opção</option>
            {options.map(({name, id}: OptionProps) => (
              <option key={id} value={id}>{name}</option>
            )
          )}
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