import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { createInscription } from "../../services/Inscriptions.service"

const initialFormData = {
    userName: '',
    userEmail: ''

}

export function InscriptionForm (kitchenId, onRegister) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [formData, setFormData] = useState({
        userName: '',
        userEmail:''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
        setErrorMsg(undefined)
        setIsSubmiting(true)
        await createInscription({
            name: formData.userName,
            email:formData.userEmail,
            kitchenId: parseInt(kitchenId)
        })
    
            setShowSuccess(true)
            setFormData(initialFormData)
            onRegister()
        } catch (err) {
            setErrorMsg('Falha ao fazer inscrição. Tente novamente.')
        }
        setIsSubmiting(false)
    }
    return (
        <>
        <h2>Formulário de Inscrição</h2>
        {showSuccess && (
            <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Inscrito com sucesso.</Alert>
        )}
        {errorMsg && (
            <Alert variant="danger">{errorMsg}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="inscription-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                    placeholder="Informe seu nome"
                    value={formData.userName}
                    onChange={handleChange}
                    name="userName"
                    required
                />
            </Form.Group>
            <Form.Group controlId="inscription-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                    type='email'
                    placeholder="exemplo@exemplo.com"
                    value={formData.userEmail}
                    onChange={handleChange}
                    name="userEmail"
                    required
                    />
                </Form.Group>
                <Button type='submit' disabled={isSubmiting}>Inscrever</Button>
            </Form> 
        </>
    )
}