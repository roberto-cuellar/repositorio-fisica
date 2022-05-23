import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDocuments } from '../hooks/useDocuments';


export const CartasEncontradas = ({set:setKeyword2, keywords="", tipoBusqueda=0}) => {
   
  const N = 5; // resultados a mostrar
  //const {data: data, loading, selectionVector} = useDocuments({keywords, tipoBusqueda})
  const {state,busqueda} = useDocuments({keywords, tipoBusqueda})
  const {data: data,loading, selectionVector} = state;
  const [keyWord,setKeyword] = useState("");
  
  // useEffect(()=>{
  //   busqueda(keywords, tipoBusqueda);
  // },[keywords,tipoBusqueda])
  console.log("REDISPARO")
  useEffect(()=>{
       busqueda(keywords, tipoBusqueda);
    },[keywords,tipoBusqueda])
    

  

  const handleClick = (e)=>{
    // setKeyword(e.target.name)
    setKeyword2(e.target.name)
    busqueda(e.target.name,tipoBusqueda);
    // keywords = "67";
  }



  let tipoBusquedaTitulo ="";
  if(tipoBusqueda===0){
    tipoBusquedaTitulo ="Últimas Tésis Agregadas";
  }
  if(tipoBusqueda===1){
    tipoBusquedaTitulo ="Tesis por Año";
  }
  if(tipoBusqueda===2){
    tipoBusquedaTitulo ="Tesis por Director";
  }
  if(tipoBusqueda===3){
    tipoBusquedaTitulo ="Tesis por Rama";
  }
  if(tipoBusqueda===4){
    tipoBusquedaTitulo ="Tesis por Palabras Clave";
  }
     
  return (
    <>
    <h3 >{tipoBusquedaTitulo}</h3>
    <p>Seleccione una opción:</p>
    {selectionVector.map((item)=>{
      return(<Button key={item} variant="info animate__animated animate__fadeIn mx-1"
      name = {item}
      onClick = {handleClick}
      >{item}</Button>)
    })}
    
    {(tipoBusqueda===0)&&
            
            data.map((item)=>{
            return(
            <Card key = {item.id} style={{ width: '100%' }} className="animate__animated animate__fadeIn">
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                <Card.Text>
                {item.resumen}
                </Card.Text>
                <Card.Link href="#">Ver más</Card.Link>
                <Card.Link href="#">Leer</Card.Link>
                <Card.Link href="#">Citar</Card.Link>
                </Card.Body>
            </Card>
        )})
    }
    {(tipoBusqueda===1)&&
            data.map((item)=>{
            return(
            <>
            {/* <h4 className="animate__animated animate__fadeIn">HOLA</h4> */}
            <Card key = {item.id} style={{ width: '100%' }} className=" animate__animated animate__fadeIn"> 
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" ><span className='bg-warning'>{item.anio}</span></Card.Subtitle>
                <Card.Text>
                {item.resumen}
                </Card.Text>
                <Card.Link href="#">Ver más</Card.Link>
                <Card.Link href="#">Leer</Card.Link>
                <Card.Link href="#">Citar</Card.Link>
                </Card.Body>
            </Card>
            </>
        )})
    }
    {(tipoBusqueda===2)&&
            data.map((item)=>{
            return(
            <Card key = {item.id} style={{ width: '100%' }} className=" animate__animated animate__fadeIn">
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" ><span className='bg-warning'>{item.tutor}</span></Card.Subtitle>
                <Card.Text>
                {item.resumen}
                </Card.Text>
                <Card.Link href="#">Ver más</Card.Link>
                <Card.Link href="#">Leer</Card.Link>
                <Card.Link href="#">Citar</Card.Link>
                </Card.Body>
            </Card>
        )})
    }
    {(tipoBusqueda===3)&&
            data.map((item)=>{
            return(
            <Card key = {item.id} style={{ width: '100%' }} className=" animate__animated animate__fadeIn">
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" ><span className='bg-warning'>{item.areas}</span></Card.Subtitle>
                <Card.Text>
                {item.resumen}
                </Card.Text>
                <Card.Link href="#">Ver más</Card.Link>
                <Card.Link href="#">Leer</Card.Link>
                <Card.Link href="#">Citar</Card.Link>
                </Card.Body>
            </Card>
        )})
    }
    </>
  )
}
