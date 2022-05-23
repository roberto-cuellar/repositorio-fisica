
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import { NavBarPrincipal } from './components/NavBarPrincipal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { TesisTitle } from './components/TesisTitle';
import { TiposBusqueda2 } from './components/TiposBusqueda2';
import { HomeScreen } from './screens/HomeScreen';
import { IniciarSesionScreen } from './screens/IniciarSesion';
import { RegistrarseScreen } from './screens/RegistrarseScreen';
import { TesisScreen } from './screens/TesisScreen';
import { TrabajosScreen } from './screens/TrabajosScreen';
import { PublicacionesScreen } from './screens/PublicacionesScreen';

function App() {
  return (

    <Router>
      <div>
          <NavBarPrincipal />
          <Routes>
              <Route exact path="/" element = {<HomeScreen />}/>
              <Route exact path="/login" element = {<IniciarSesionScreen />}/>
              <Route exact path="/register" element = {<RegistrarseScreen />}/>
              <Route exact path="/tesis" element = {<TesisScreen />}/>
              <Route exact path="/trabajos" element = {<TrabajosScreen />}/>
              <Route exact path="/publicaciones" element = {<PublicacionesScreen />}/>
              <Route exact path='*' element={<HomeScreen /> } />
          </Routes>
      </div>
    </Router> 


    // <>
    //   <NavBarPrincipal />
    //   {/* <Container>
    //     <TesisTitle />
    //     <TiposBusqueda2 />
    //   </Container> */}
    // </>
  );
}

export default App;
