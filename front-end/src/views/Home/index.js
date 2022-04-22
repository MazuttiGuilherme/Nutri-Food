import { Button, Container } from 'react-bootstrap'
import { Layout } from '../../components/Layout'
import Banner from  '../../assets/img/banner1.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function HomeView () {
    return (
        <Layout>
          <Container>
              <BannerHome className='shadow border p-4p-md-5 my-3 d-md-flex align-items-center'>
                  <div>
                    <h1>Bem vindo(a) a Nutri Food.</h1>  
                    <p>Conheça nossos planos fit.</p>
                    <p>Contrate o seu agora mesmo!</p>
                    <Button as={Link} to='/Kitchens' className='text-uppercase btn-primary' >Planos</Button>
                  </div>
                  <div> 
                    <img src={Banner} alt='Nutri-Food' width={626} height={391} className='img-fluid' />
                  </div>
              </BannerHome>
              
            </Container>
        </Layout>
    )
  }

  const BannerHome = styled.div`
    & h1 {
      color: #9be198;
    }
    & p {
      font-size: 1.125rem;
    }
    & > div {
      flex: 1;
    }
  `