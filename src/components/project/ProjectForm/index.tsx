import { Input } from '../../Form/Input'
import { Select } from '../../Form/Select'
import { SubmitButton } from '../../Form/SubmitButton'
import { Form }  from './styled.Form'

interface FormProps {
  btnText: string;
}

export function ProjectForm({ btnText }: FormProps) {
  return (
    <Form>

    <Input  type="text"
            text="Nome do Projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"
      />

    <Input  type="number"
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o orçamento Total"
      />
    <Select name="category_id" text="Selecione a categoria" /> 

    <SubmitButton text={btnText} />

    </Form>
  )
}