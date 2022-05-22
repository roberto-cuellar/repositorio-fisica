
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import { NavBarPrincipal } from './components/NavBarPrincipal';

import { TesisTitle } from './components/TesisTitle';
import { TiposBusqueda } from './components/TiposBusqueda';
function App() {
  return (
    <>
      <NavBarPrincipal />
      <Container>
        <TesisTitle />
        <TiposBusqueda />

      </Container>
    </>
  );
}

export default App;
