import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import REPOUP from '../SVG/REPOUP4.svg'

export const NavBarPrincipal = () => {
  return (

      // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      //  <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/">REPOSITÓRIO FÍSICA UP</NavLink>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //       <ul className="navbar-nav">
      //           <li className="nav-item active">
      //               <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/tesis">Tesis</NavLink>
      //           </li>
      //           <li className="nav-item">
      //               <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/trabajos">Trabajos</NavLink>
      //           </li>
      //           <li className="nav-item">
      //               <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/publicaciones">Publicaciones</NavLink>
      //           </li>
      //           <li className="nav-item">
      //               <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/login">Iniciar Sesión</NavLink>
      //           </li>
      //           <li className="nav-item">
      //               <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/register">Registrarse</NavLink>
      //           </li>
                
      //       </ul>
      //   </div>
      // </nav>


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/"><Navbar.Brand ><img
        src= {REPOUP}
        width="120"
        height="60"
        className="d-inline-block align-top mr-0"
        alt="React Bootstrap logo"
        crossOrigin="anonymous"
      /></Navbar.Brand></NavLink>
      {/* <Navbar.Brand href="#home">REPOSITÓRIO FÍSICA UP</Navbar.Brand> */}
      <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/"><Navbar.Brand>REPOSITÓRIO FÍSICA UP</Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/tesis">Tesis</NavLink>
        <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/trabajos">Trabajos</NavLink>
        <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/publicaciones">Publicaciones</NavLink>
        <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/blog">Blog REFIUP</NavLink>
          {/* <NavDropdown title="Publicaciones" id="collasible-nav-dropdown">
            <NavDropdown.Item><NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/sdassdas">BISTUA</NavLink></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Blog Física Unipamplona</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Nacional</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Internacional</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          
          <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/register">Registrarse</NavLink>
          <NavLink className={(navData) => navData.isActive ? "active nav-link" : "nav-link" } to="/login">Iniciar Sesión</NavLink>
        
        
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
