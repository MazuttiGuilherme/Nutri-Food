import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";

export function DashboardView () {
    return (
    <LayoutPortal>
      <h1 className="mt-4">Bem vindo(a) Guilherme.</h1>
      <p>Utilize o menu para gerenciar os dados do site.</p>
      <Alert variant="info">Você receberá todas as informações do Plano por e-mail</Alert>
    </LayoutPortal>
  )
}