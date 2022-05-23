import React, { useEffect, useState } from 'react'
import {Button, ButtonGroup,Form} from 'react-bootstrap'
import { CartasEncontradas } from './CartasEncontradas';

export const TiposBusqueda = () => {

    const [textField,setTextField] = useState(false); ///For search by keyword
    const [inputValue, setInputValue] = useState(""); /// state of the text input
    const [tipoBusqueda,setTipoBusqueda] = useState(0); // Search type 0, its general results
    const [buscar,setBuscar]=useState(false);

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleClick = (e) =>{
        if(e.target.name == "year"){
            setTipoBusqueda(1);
        }
        if(e.target.name == "director"){
            setTipoBusqueda(2);
        }
        if(e.target.name == "rama"){
            setTipoBusqueda(3);
        }
        if(e.target.name == "keyword"){
            setTextField(!textField);
            setTipoBusqueda(4);
        }
        
        if(textField){
            setTextField(!textField)
        }
    }

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){ /// El método trim() borra los espacios antes y después
            console.log("Realizar la busqueda")
        }        
    } 

  return (
      <>
        <h4> Seleccione el tipo de busqueda que desea realizar</h4>            
        <ButtonGroup aria-label="Basic example">        
            <Button variant="secondary" name="year" onClick={handleClick}>Año</Button>
            <Button variant="secondary" name="director" onClick={handleClick}>Director</Button>
            <Button variant="secondary" name="rama" onClick={handleClick}>Rama</Button>
            <Button variant="secondary" name="keyword" onClick={handleClick}>Palabra Clave</Button>
        </ButtonGroup>
        <br/>
        {
            textField&&<>
                        <form onSubmit={handleSubmit}>
                        <Form.Label className="animate__animated animate__fadeInDown">Palabra Clave</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputText1"
                            aria-describedby="textBlock"
                            className="animate__animated animate__fadeInDown"
                            placeholder='Ingrese palabra clave para la busqueda'
                            autoComplete='off'
                            value = {inputValue}
                            onChange ={handleInputChange}
                        />
                        <Form.Text id="textBlock" muted className="animate__animated animate__fadeInDown">
                            Las palabras claves deben ser claras, sin caracteres especiales
                        </Form.Text>
                        </form>
                        </>
        }
        <h4 className='mt-4'>Resultados Encontrados</h4>
        <CartasEncontradas keywords= {inputValue} tipoBusqueda = {tipoBusqueda} />

      </>
  )
}
