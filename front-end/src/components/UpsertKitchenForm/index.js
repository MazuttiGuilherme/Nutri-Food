import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const emptyFormData = {
    name:'',
    coordinator: '',
    shortDescription: '',
    description: '',
    image:''
}

export function UpsertKitchenForm ({ initialValue = emptyFormData, buttonLabel = 'Cadastrar', onSubmit }) {
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId="kitchen-name">
                <Form.Label className='mb-0'>Nome</Form.Label>
                <Form.Control placeholder='Nome do curso' name='name' value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className='mb-3' controlId="kitchen-short-description">
                <Form.Label className='mb-0'>Descrição curta</Form.Label>
                <Form.Control placeholder='Texto que aparece na listagem do plano ' name='shortDescription' value={formData.shortDescription} onChange={handleChange} required as='textarea'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="kitchen-description">
                <Form.Label className='mb-0'>Descrição longa</Form.Label>
                <Form.Control placeholder='Texto que aparece no detalhe do plano' name='description' value={formData.description} onChange={handleChange} required as='textarea'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="kitchen-image">
                <Form.Label className='mb-0'>Imagem</Form.Label>
                <Form.Control placeholder='Imagem que aparece na listagem do plano' name='image' value={formData.image} onChange={handleChange} required />
                <Form.Text>Cole aqui o link da imagem hospedada no <a href='https://cloudinary.com' target='_blank' rel="noreferrer">cloudinary.</a></Form.Text>
            </Form.Group>
            <Button type='submit'>{buttonLabel}</Button>
        </Form>
    )
}