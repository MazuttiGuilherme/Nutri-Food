import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function CardKitchen ({kitchen}) {
    return (
        <Card className='text-center shadow h-100'>
            <img src={kitchen.img} alt={kitchen.name}/>
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Img variant="top" src="../../assets/img/banner2.jpg"/>
                <Card.Title as='h2' className='h5'>{kitchen.name}</Card.Title>
                <Card.Text>{kitchen.shortDescription}</Card.Text>
                <Button as={Link} to={`/kitchen/${kitchen.id}`} className='mt-auto'>Ver mais</Button>
            </Card.Body>
        </Card>
    )
}