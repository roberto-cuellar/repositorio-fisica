import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import React from 'react'
import data from '../helpers/tesisData'


export const CartasEncontradas = ({keywords="", tipoBusqueda=0}) => {
  console.log(keywords)
  
    
  return (
    <>
    {
        data.map((item)=>{
            return(
            <Card key = {item.id} style={{ width: '100%' }} className=" animate__animated animate__fadeIn">
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
    </>
  )
}
