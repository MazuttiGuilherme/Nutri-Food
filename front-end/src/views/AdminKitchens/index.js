import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LayoutPortal } from "../../components/LayoutPortal";
import { PortalHeader } from "../../components/PortalHeader";
import { getKitchens } from "../../services/Kitchens.service";
import { Loading } from "../../components/Loading";
import { TableKitchens } from "./TableKitchens";

export function AdminKitchensView() {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKitchens = async () => {
    try {
      const data = await getKitchens();
      setKitchens(data);
    } catch {
      toast.error("Falha ao buscar planos. Recarregue a página.");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchKitchens();
  }, []);
  return (
    <LayoutPortal>
      <PortalHeader
        title="Planos cadastrados"
        buttonText="Novo plano"
        buttonLink="/portal/kitchens/cadastro"
      />
      {loading && <Loading />}
      <TableKitchens kitchens={kitchens} onDeleteKitchen={fetchKitchens} />
    </LayoutPortal>
  );
}
