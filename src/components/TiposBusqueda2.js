import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup,Form} from 'react-bootstrap'
import { useFiltrosTesis } from '../hooks/useFiltrosTesis';
import { useTesisBusqueda } from '../hooks/useTesisBusqueda';
import { CartasEncontradas } from './CartasEncontradas';
import { ElementosEncontrados } from './ElementosEncontrados';
import { FiltrosTesis } from './FiltrosTesis';
import { TipoBusquedaMenu } from './TipoBusquedaMenu';

export const TiposBusqueda2 = React.memo(() => {

    const [tipoBusqueda,setTipoBusqueda] = useState(1); // Search type 1, its the default case
    useEffect(()=>{ /// Necesario reiniciar el filtro para que se muestren los elementos, y no se crashee la aplicación 
        setFiltro("");
    },[tipoBusqueda]);
    const tipoBusquedaVector = ["year","director","areas","keywords"];
    const tipoBusquedaText = tipoBusquedaVector[tipoBusqueda-1];
    const {dataNoFiltrada,variedades,loading} = useTesisBusqueda({tipoBusqueda,tipoBusquedaVector});    
    const [filtro,setFiltro] = useState("");
    const {dataFiltrada} = useFiltrosTesis({filtro,dataNoFiltrada,tipoBusqueda,tipoBusquedaVector});
    console.log("Data Filtrada: ",dataFiltrada)
    

  return (
    <>
        <h4 className='mt-3'> Seleccione el tipo de busqueda que desea realizar</h4>            
        <TipoBusquedaMenu setTipoBusqueda={setTipoBusqueda}/>
        {
            loading? 
                (<div className='alert alert-info text-center'>Loading...</div>)
            :
            (   <>
                    <FiltrosTesis variedades={variedades} setFiltro ={setFiltro} />
                    <ElementosEncontrados  tipoBusqueda={tipoBusquedaText} filtro ={filtro} data={dataFiltrada}/>
                </>
            
            )
        }
        

    
            {/* El típo de busqueda está dado por el número siendo:
            1 para Año
            2 para Director
            3 para rama
            4 para palabra clave */}
        {/* <ButtonGroup aria-label="Basic example">    
            <Button variant="secondary" name="year" onClick={()=>setTipoBusqueda(1)} >Año</Button> 
            <Button variant="secondary" name="director" onClick={handleClick} >Director</Button>
            <Button variant="secondary" name="rama" onClick={handleClick}>Rama</Button>
            <Button variant="secondary" name="keyword" onClick={handleClick}>Palabra Clave</Button>
        </ButtonGroup>  */}
        {/* <CartasEncontradas keywords={keyWord} tipoBusqueda={tipoBusqueda} set = {setKeyword} /> */}
        </>
  )
})
