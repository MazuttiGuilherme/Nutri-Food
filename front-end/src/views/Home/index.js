import { Button, Container } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import Banner from  '/front-end/public/img/banner.jpg'
import { Link } from 'react-router-dom'

export function HomeView () {
    return (
        <Layout>
          <Container>
              <div className='shadow border p-4p-md-5 my-3 banner-home d-md-flex align-items-center'>
                  <div>
                    <h1>Bem vindo(a) a Nutri Food.</h1>  
                    <p>Conheça nossos planos fit.</p>
                    <p>Contrate o seu agora mesmo!</p>
                    <Button as={Link} to='/Kitchens' className='text-uppercase' >Planos</Button>
                  </div>
                  <div> 
                    <img src={Banner} alt='Nutri-Food' width={626} height={391} className='img-fluid' />
                  </div>
              </div>
            </Container>
        </Layout>
    )
  }