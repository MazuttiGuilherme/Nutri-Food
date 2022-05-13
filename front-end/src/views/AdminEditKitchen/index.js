import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { Loading } from "../../components/Loading";
import { UpsertKitchenForm } from "../../components/UpsertKitchenForm";
import { getKitchenById, updateKitchen } from "../../services/Kitchens.service";

export function AdminEditKitchenView() {
  const { id } = useParams();
  const [kitchen, setKitchen] = useState();
  useEffect(() => {
    const fetchKitchen = async () => {
      try {
        const kitchenData = await getKitchenById(id);
        setKitchen(kitchenData);
      } catch {
        toast.error("Falha ao buscar dados do plano. Recarregue a página.");
      }
    };
    fetchKitchen();
  }, [id]);
  const navigate = useNavigate()
  const handleSubmit = async (formData) => {
      try {
        await updateKitchen(id, formData)
        toast.success('Plano alterado com sucesso.')
        navigate('/portal/kitchens')
      } catch {
          toast.error('Falha ao editar plano. Tente novamente')
      }
  }
  return (
    <LayoutPortal>
      <h1 className="mt-4">Editar plano</h1>
      {kitchen ? (
        <UpsertKitchenForm
          initialValue={{
            name: kitchen.name,
            shortDescription: kitchen.shortDescription,
            description: kitchen.description,
            image: kitchen.image
          }}
          buttonLabel='Alterar'
          onSubmit={handleSubmit}
        />
      ) : (
        <Loading />
      )}
    </LayoutPortal>
  );
}
