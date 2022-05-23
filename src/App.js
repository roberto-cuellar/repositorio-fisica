
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import { NavBarPrincipal } from './components/NavBarPrincipal';

import { TesisTitle } from './components/TesisTitle';
import { TiposBusqueda2 } from './components/TiposBusqueda2';
function App() {
  return (
    <>
      <NavBarPrincipal />
      <Container>
        <TesisTitle />
        <TiposBusqueda2 />
      </Container>
    </>
  );
}

export default App;
