import React from 'react'
import {Container} from 'react-bootstrap'
import { FooterGeneral } from '../components/FooterGeneral';
import { TesisTitle } from '../components/TesisTitle';
import { TiposBusqueda2 } from '../components/TiposBusqueda2';

export const TesisScreen = () => {
  return (
    <>
    
    <Container>
        <TesisTitle />
        <TiposBusqueda2 />
    </Container> 
    </>
  )
}
