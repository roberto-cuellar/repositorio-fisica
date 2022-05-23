import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup,Form} from 'react-bootstrap'
import { CartasEncontradas } from './CartasEncontradas';

export const TiposBusqueda2 = () => {
    const [tipoBusqueda,setTipoBusqueda] = useState(0); // Search type 0, its general results
    const [keyWord,setKeyword] = useState("");

    console.log("DISPARO EN TIPOS")
    const handleClick = (e) =>{
        if(e.target.name == "year"){
            setTipoBusqueda(1);
            setKeyword("");

            // console.log("Actualización: ",tipoBusqueda);
        }
        if(e.target.name == "director"){
            setTipoBusqueda(2);
            setKeyword("");
            // console.log("Actualización: ",tipoBusqueda);
        }
        if(e.target.name == "rama"){
            setTipoBusqueda(3);
            setKeyword("");
            // console.log("Actualización: ",tipoBusqueda);
        }
        if(e.target.name == "keyword"){
            setTipoBusqueda(4);
            setKeyword("");
            // console.log("Actualización: ",tipoBusqueda);
        }      
    }

  return (
    <>
        <h4> Seleccione el tipo de busqueda que desea realizar</h4>            
        <ButtonGroup aria-label="Basic example">        
            <Button variant="secondary" name="year" onClick={handleClick} >Año</Button>
            <Button variant="secondary" name="director" onClick={handleClick} >Director</Button>
            <Button variant="secondary" name="rama" onClick={handleClick}>Rama</Button>
            <Button variant="secondary" name="keyword" onClick={handleClick}>Palabra Clave</Button>
        </ButtonGroup>
        <CartasEncontradas keywords={keyWord} tipoBusqueda={tipoBusqueda} set = {setKeyword} />
    </>
  )
}
