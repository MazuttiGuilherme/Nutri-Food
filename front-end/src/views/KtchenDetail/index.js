import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { getKitchenById } from "../../services/Kitchens.service";
import { NotFoundView } from "../NotFound";
import { InscriptionForm } from "./inscriptionForm";
import { Inscriptions } from "./inscriptions";

export function KitchenDetailView() {
  const { id } = useParams();
  const [kitchen, setKitchen] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState()
  const fetchKitchen = useCallback(async () => {
    try {
      const data = await getKitchenById(id)
      setKitchen(data);
      setLoading(false);
  } catch (err){
      const message = err.message === 'Response not ok.'
      ? '404' 
      :'Falha ao buscar informações. Recarregue a página.'
      setErrorMsg(message)
      setLoading(false)
  }
}, [id])
  useEffect(() => {
    fetchKitchen();
  }, [fetchKitchen]);
  if (loading) {
    return <Loading />;
  }
  if (errorMsg === '404') {
      return <NotFoundView />
  }
  return (
    <Layout>
        <Container className="kitchen-detail-container">
            {errorMsg ? (
                <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
            ) :(
        <>      
            <h1>{kitchen.name}</h1>
            <p>{kitchen.description}</p>
            <Inscriptions inscriptions={kitchen.inscriptions} />
            <InscriptionForm kitchenId={id} onRegister= {fetchKitchen} />
        </>
            )}
        </Container>
    </Layout>
  );
}
