import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Input } from '../../Form/Input'
import { Select } from '../../Form/Select'
import { SubmitButton } from '../../Form/SubmitButton'
import { Form }  from './styled.Form'

interface FormProps {
  btnText: string;
  handleSubmit?: any
  projectData?: string[] | any
}

type CategoriesProps = {
  id?: number;
  name?: string
}

export function ProjectForm({handleSubmit, btnText,  projectData }: FormProps) {

  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [project, setProject] = useState(projectData || {})

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        })
        const data = await response.json()
        setCategories(data)
      }

      fetchData()
    }, [])

    const submit = (e: FormEvent) => {
      e.preventDefault()
      // console.log(project)
      handleSubmit(project)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setProject({...project, [e.target.name]: e.target.value})
    }

    const handleCategory = (e: ChangeEvent<HTMLInputElement | any>) => {
      setProject({ ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }


  return (
    <Form onSubmit={submit}>

    <Input  type="text"
            text="Nome do Projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
          />

    <Input  type="number"
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o orçamento Total"
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
          />

    <Select name="category_id" 
            text="Selecione a categoria" 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            /> 

    <SubmitButton text={btnText} />

    </Form>
  )
}