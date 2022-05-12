import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function TableKitchens ({kitchens}) {
    const handleClick = (kitchen) => {
        console.log( 'oi', kitchen)
    }
    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {kitchens.map(kitchen =>(
                    <tr key={kitchen.id}>
                        <td>{kitchen.id}</td>
                        <td>{kitchen.name}</td>
                        <td>{kitchen.coordinator}</td>
                        <td className='d-grid gap-1 d-sm-table-cell'>
                            <Button size='sm' variant='primary' as={Link} to= {`/portal/kitchens/${kitchen.id}`}>Editar</Button>
                            <Button size='sm' className='ms-sm-1' onClick={() => handleClick(kitchen)}>Deletar</Button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </Table>
    )
}