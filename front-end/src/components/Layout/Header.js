
import { Container, Nav, Navbar} from 'react-bootstrap'
import Logo from '/front-end/public/img/2.svg'
import { Link } from "react-router-dom"

export function Header () {
    return (
      <header>
        <Navbar expand='md' className='main-navbar'>
          <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} alt='Nutri-Food' width={181} height={181}/>
                    </Navbar.Brand>
                    <Navbar.Toggle 
                    aria-controls='navbar-header'/>
                <Navbar.Collapse id='navbar-header'>
                <Nav className='ms-auto'>
                    <Nav.Link as={Link} to='/'>HOME</Nav.Link>
                    <Nav.Link as={Link} to='/kitchens'>KITCHENS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container> 
      </Navbar>
    </header>
    )
  }