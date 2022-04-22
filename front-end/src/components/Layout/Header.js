
import { Container, Nav, Navbar} from 'react-bootstrap'
import Logo from '../../assets/img/2.svg'
import { Link } from "react-router-dom"
import styled from 'styled-components'

export function Header () {
    return (
      <header>
        <NavbarStyled expand='md'>
          <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} alt='Nutri-Food' width={181} height={181}/>
                    </Navbar.Brand>
                    <NavbarToggleStyled 
                    aria-controls='navbar-header'/>
                <Navbar.Collapse id='navbar-header'>
                <Nav className='ms-auto'>
                    <NavLinkStyled forwardedAs={Link} to='/'>HOME</NavLinkStyled>
                    <NavLinkStyled forwardedAs={Link} to='/kitchens'>PLANOS</NavLinkStyled>
                </Nav>
            </Navbar.Collapse>
          </Container> 
      </NavbarStyled>
    </header>
    )
  }

  const NavbarStyled = styled(Navbar)`
    background-color: #9be198;
    max-height: 200px;
  `

  const NavbarToggleStyled = styled(Navbar.Toggle)`
    background: #fff;
    border: none;
  `
  const NavLinkStyled = styled(Nav.Link)`
    background-color:  #FFF;
    border-radius: 3px;
    text-align: center;
    margin: 5px 0;
    box-shadow: 2px 2px 2px (rgba42 , 69, 136, 0.3);
    @media (min-width: 768px) {
          margin: 0 5px;
      }
  `