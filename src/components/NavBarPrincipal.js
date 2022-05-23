import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import REPOUP from '../SVG/REPOUP4.svg'

export const NavBarPrincipal = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img
        src= {REPOUP}
        width="120"
        height="60"
        className="d-inline-block align-top mr-0"
        alt="React Bootstrap logo"
        crossOrigin="anonymous"
      /></Navbar.Brand>
      <Navbar.Brand href="#home">REPOSITÓRIO FÍSICA UP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Tésis</Nav.Link>
          <Nav.Link href="#pricing">Trabajos</Nav.Link>
          <NavDropdown title="Publicaciones" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">BISTUA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Blog Física Unipamplona</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Nacional</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Internacional</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Registrarse</Nav.Link>
          <Nav.Link href="#memes">
            Iniciar Sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
