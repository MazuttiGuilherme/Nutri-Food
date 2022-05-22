import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deletekitchen } from "../../services/Kitchens.service";

export function TableKitchens({ kitchens, onDeleteKitchen }) {
  const [kitchenToDelete, setKitchenToDelete] = useState();
  const hideModal = () => setKitchenToDelete(undefined);
  const handleClick = (kitchen) => {
    setKitchenToDelete(kitchen);
  };
  const handleDelete = async () => {
    try {
      await deletekitchen(kitchenToDelete.id);
      await onDeleteKitchen();
      toast.success('Plano excluído com sucesso!')
    } catch {
      toast.error("Falha ao deletar plano. Tente novamente.");
    }
    hideModal()
  };
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kitchens.map((kitchen) => (
            <tr key={kitchen.id}>
              <td>{kitchen.id}</td>
              <td>{kitchen.name}</td>
              <td>{kitchen.coordinator}</td>
              <td className="d-grid gap-1 d-sm-table-cell">
                <Button
                  size="sm"
                  variant="primary"
                  as={Link}
                  to={`/portal/kitchens/${kitchen.id}`}
                >
                  Editar
                </Button>
                <Button
                  size="sm"
                  className="ms-sm-1"
                  onClick={() => handleClick(kitchen)}
                >
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={kitchenToDelete} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ao clicar em confirmar o plano{" "}
          <strong>{kitchenToDelete?.name}</strong> será excluído. Deseja
          realmente excluir o plano?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>Deletar plano</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
