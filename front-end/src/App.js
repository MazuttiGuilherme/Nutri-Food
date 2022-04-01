import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import Logo from './assets/img/logo.jpg'
import Banner from './assets/img/banner.jpg'


function Header () {
  return (
    <header>
      <Navbar bg='warning' expand='md' className='main-navbar'>
        <Container>
              <Navbar.Brand href='/'>
                  <img src={Logo} alt='Dark-Kitchens' width={181} height={181}/>
                  </Navbar.Brand>
                  <Navbar.Toggle 
                  aria-controls='navbar-header'/>
              <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/kitchens'>Kitchens</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container> 
    </Navbar>
  </header>
  )
}



function Footer () {
  return (
    <footer className='footer text-center text-white py-2 mt-4'>
      <p className='m-0'>Todos os direitos reservados a Dark-Kitchens.</p>
    </footer>
  )
}

function Layout ({children}) {
  //const children = props.children
  //const {children} = props
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer/>
    </>
  )
}

function HomeView () {
  return (
      <Layout>
      <Container>
            <div className='shadow border p-4p-md-5 my-3 banner-home d-md-flex align-items-center'>
                <div>
                  <h1>Bem vindo(a) a Dark-Kitchens!</h1>  
                  <p>Conheça nossas cozinhas.</p>
                  <p>Contrate a sua agora mesmo.</p>
                  <Button className='text-uppercase'>Kitchens</Button>
                </div>
                <div> 
                  <img src={Banner} alt='Dark-Kitchens' width={626} height={391} className='img-fluid' />
                </div>
            </div>
          </Container>
      </Layout>
  )
}

function NotFoundView () {
  return (
    <Layout>
      <h1>Página não encontrada</h1>
    </Layout>
  )
}

function App() {
  return <HomeView/>
}

export default App;
