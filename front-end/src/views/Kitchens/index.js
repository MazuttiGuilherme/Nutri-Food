import { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { CardKitchen } from '../../components/CardKitchen'
import { Layout } from '../../components/Layout'
import { Loading } from '../../components/Loading'
import { getKitchens } from '../../services/Kitchens.service'
    
    export function KitchensView () {
        const[kitchens, setKitchens] = useState([])
        const [loading, setLoading] = useState(true)
        const [errorMsg, setErrorMsg] = useState()
        useEffect(() => {
            const fetchKitchens = async () => {
            try {
                const data = await getKitchens()
                setKitchens(data)
            }catch{
                setErrorMsg ('Falha ao buscar informações. Recarregue a página.')
            }
            setLoading(false)
        }
        fetchKitchens()
        }, [])
        return (
            <Layout>
                <Container>
                    <h1 className='text-center mt-4'>Nossos Planos</h1>
                    {loading && (
                        <Loading />
                    )}
                    {errorMsg &&(
                        <Alert variant='danger'>{errorMsg}</Alert>
                    )}
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