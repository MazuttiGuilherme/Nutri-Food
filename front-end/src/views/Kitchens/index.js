import { Col, Container, Row } from 'react-bootstrap'
import { CardKitchen } from '../../components/CardKitchen'
import { Layout } from '../../components/Layout'

const kitchens = [
    {
        id: 1,
        name: 'Dark-Kitchen Botafogo',
        shortDescription:'Ótima localização e pronta para começar o seu negócio',
    },
    {
        id: 3,
        name: 'Dark-Kitchen Copacabana',
        shortDescription:'No coração de Copa; Totalmente equipada  e pronta para começar o seu negócio',
    },
    {
        id: 4,
        name: 'Dark-Kitchen Barra',
        shortDescription:'Totalmente equipada pronta para começar o seu negócio',
    },
    {
        id: 5,
        name: 'Dark-Kitchen Recreio',
        shortDescription:'Totalmente equipada, no bairro do Recreio pronta para começar o seu negócio',
    },
    {
        id: 6,
        name: 'Dark-Kitchen Nova Iguaçu',
        shortDescription:'Localizada no centro de Nova Iguaçu a cozinha está pronta para receber o seu negócio',
    },
    {
        id: 7,
        name: 'Dark-Kitchen Caxias',
        shortDescription:'Ótima localização e totalmente equipada, esperando por você',
    },
    {
        id: 8,
        name: 'Dark-Kitchen Vila da Penha',
        shortDescription:'Próxima ao Parque Xangai, equipada e pronta para começar o seu negócio',
    },
]
    
    export function KitchensView () {
        return (
            <Layout>
                <Container>
                    <h1 className='text-center mt-4'>Kitchens</h1>
                        <Row>
                        {kitchens.map((kitchen) => (
                            <Col key={kitchen.id} className='mb-4' xs={6} sm={4} lg={3}>
                                <CardKitchen kitchen={kitchen} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Layout>
            )
        }