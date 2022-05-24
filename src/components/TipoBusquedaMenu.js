import React from 'react'
import {Button, ButtonGroup,Form} from 'react-bootstrap'

export const TipoBusquedaMenu = ({setTipoBusqueda}) => {
  return (
    <ButtonGroup aria-label="Basic example">        
        {/* El típo de busqueda está dado por el número siendo:
            1 para Año
            2 para Director
            3 para rama
            4 para palabra clave */}
            <Button variant="secondary" name="year" onClick={()=>setTipoBusqueda(1)} >Año</Button> 
            <Button variant="secondary" name="director" onClick={()=>setTipoBusqueda(2)} >Director</Button>
            <Button variant="secondary" name="rama" onClick={()=>setTipoBusqueda(3)}>Rama</Button>
            <Button variant="secondary" name="keyword" onClick={()=>setTipoBusqueda(4)}>Palabra Clave</Button>
    </ButtonGroup>
  )
}
