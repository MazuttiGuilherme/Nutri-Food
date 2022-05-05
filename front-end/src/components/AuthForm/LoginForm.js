import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../services/Users.service";

export function LoginForm () {
    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const dispatch = useDispatch()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const userData = await login(formData)
            // Enviar para Redux
            const action = {
                type:'USER_LOGIN',
                payload: userData
            }
            dispatch(action)    
        }catch (error) {
            const message = error.message === 'Credentials invalid.'
              ? 'E-mail ou senha inválidos.'
              : 'Falha ao fazer login. Tente novamente.'
            console.error(error)
            toast.error(message)
        }
    }
        return (
        <Form onSubmit={handleSubmit}>
            <p className="h4">Login</p>
            <Form.Group controlId="login-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="exemplo@exemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                    />
            </Form.Group>
            <Form.Group controlId="login-password" className="mb-3">
                <Form.Label className="m-0">Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder="Senha de acesso"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        required
                    />
            </Form.Group>
                <Button type='submit'>Entrar</Button>
        </Form>
    )
}