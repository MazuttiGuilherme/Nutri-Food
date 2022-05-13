import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutPortal } from '../../components/LayoutPortal'
import { UpsertKitchenForm } from '../../components/UpsertKitchenForm'
import { createKitchen } from '../../services/Kitchens.service'

export function AdminAddKitchenView ()  {
    const navigate = useNavigate()
    const handleSubmit = async (formData) => {
        try {
            await createKitchen(formData)
            toast.success('Novo plano cadastrado com sucesso.')
            navigate('/portal/kitchens')
        } catch {
            toast.error('Falha ao cadastrar plano. Tente novamente')
        }
    }
    return (
        <LayoutPortal>
            <h1 className='mt-4'>Novo plano</h1>
            <UpsertKitchenForm onSubmit={handleSubmit}/>
        </LayoutPortal>
    )
}