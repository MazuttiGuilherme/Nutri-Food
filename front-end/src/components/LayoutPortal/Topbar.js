import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";

export function Topbar({ onOpen }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavbarToggle onClick={onOpen} />
        <Nav className="ms-auto">
          <Dropdown align='end'>
            <DropdownToggle variant='light'>Guilherme</DropdownToggle>
            <MenuStyled>
              <DropdownItem> Sair</DropdownItem>
            </MenuStyled>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

const MenuStyled = styled(Dropdown.Menu)`
    position: absolute !important;
`


