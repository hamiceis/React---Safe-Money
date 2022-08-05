import { useEffect, useState } from 'react';
import { Input } from '../../Form/Input'
import { Select } from '../../Form/Select'
import { SubmitButton } from '../../Form/SubmitButton'
import { Form }  from './styled.Form'

interface FormProps {
  btnText: string;
}


type CategoriesProps = {
  id?: number;
  name?: string
}

export function ProjectForm({ btnText }: FormProps) {

  const [categories, setCategories] = useState<CategoriesProps[]>([])

    useEffect(() => {
      async function fetchData(){
        const response = await fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        const data = await response.json()
        setCategories(data)
      }

      fetchData()
    }, [])

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
    <Select name="category_id" text="Selecione a categoria" options={categories}/> 

    <SubmitButton text={btnText} />

    </Form>
  )
}