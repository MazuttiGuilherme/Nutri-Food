import { Button, Container } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import Banner from  '../../assets/img/banner.jpg'

export function HomeView () {
    return (
        <Layout>
          <Container>
              <div className='shadow border p-4p-md-5 my-3 banner-home d-md-flex align-items-center'>
                  <div>
                    <h1>Bem vindo(a) a Dark-Kitchen!</h1>  
                    <p>Conheça nossas cozinhas.</p>
                    <p>Contrate a sua agora mesmo.</p>
                    <Button className='text-uppercase' >Kitchens</Button>
                  </div>
                  <div> 
                    <img src={Banner} alt='Dark-Kitchens' width={626} height={391} className='img-fluid' />
                  </div>
              </div>
            </Container>
        </Layout>
    )
  }