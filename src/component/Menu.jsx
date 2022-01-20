import React from 'react';
import{Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
function Menu() {
  return(<Navbar bg="primary" position="fixed"  varient="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LeewayHertz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="About-Us" id="basic-nav-dropdown">

          <NavDropdown.Item href="#action/3.1"> About-Ceo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">About-Manager</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">About-Director</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default Menu;
