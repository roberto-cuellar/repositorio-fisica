import React, { useEffect } from 'react'
import {Button, ButtonGroup,Form,Dropdown} from 'react-bootstrap'

export const FiltrosTesis = React.memo(({variedades,setFiltro}) => {



        
        const handleClick = (e) => {
            // console.log("Nombre: ",e.target.name)

            // const nombre = (e.target.name).normalize("NFD").replace(/[\u0300-\u036f]/g, ""); /// se eliminan las tildes
            // const noSpaces = nombre.replace(/\s/g, '').toLowerCase(); /// se eliminan los espacios en blanco en caso de que una rama tenga estos, luego se pone todo en minuscula

            // para lograr una mayor generalidad
            // console.log("Corrección : ", noSpaces)
            setFiltro(e.target.name); /// Se actualiza el estado del filtro de tésis
        }  
    
    
    return (
    <>  
        <h5 className='mt-3'>Aplicar Filtros</h5>
        <hr/>
        {/* <ButtonGroup aria-label="Basic example"> 
            {variedades.map((element,index) => {        
                   return( <Button key={element} name={element} variant="primary">{element}</Button>                )
            })}
        </ButtonGroup> */}
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Filtrar
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
                {variedades.map((element,index) => {        
                    return( <Dropdown.Item key={element} name={element} variant="primary" onClick={handleClick}>{element}</Dropdown.Item>                )
                })}        
            </Dropdown.Menu>
        </Dropdown>
    </>
  )
})
