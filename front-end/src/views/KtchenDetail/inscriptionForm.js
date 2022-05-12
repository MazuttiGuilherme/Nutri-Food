import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AuthForm } from "../../components/AuthForm";
import { createInscription } from "../../services/Inscriptions.service";
import { selectUser } from "../../store/User/User.selectors";

export function InscriptionForm({ kitchenId, onRegister }) {
  const user = useSelector(selectUser)
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleInscription = async () => {
    try {
      
      setIsSubmiting(true);
      await createInscription({
        name: user.name,
        email: user.email,
        kitchenId: parseInt(kitchenId),
        userId: user.id
      });
      toast.success('Inscrito com sucesso.')
      onRegister();
    } catch (err) {
      toast.error("Falha ao fazer inscrição. Tente novamente.");
    }
    setIsSubmiting(false);
  };
  return (
    <>
      <h2>Faça sua inscrição</h2>
      { user ? (
        <Button onClick={handleInscription} disable={isSubmiting}>Inscrever</Button>
      ) : (
        <>
          <p>Faça login ou crie uma conta abaixo para se inscrever no curso.</p>
          <AuthForm redirectAfterLogin={false}/>
        </>
      )}
    </>
  );
}
