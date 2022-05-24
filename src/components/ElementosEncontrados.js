import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'

export const ElementosEncontrados = ({filtro,data,tipoBusqueda}) => {
    console.log("tipo busqueda: ",tipoBusqueda)
  return (
    <>{!!data&&(
        data.map((item)=>{
            return(
            <Card key = {item.id} style={{ width: '100%' }} className="animate__animated animate__fadeIn">
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                {/* <Card.Subtitle className="mb-2 text-muted">{item.year}</Card.Subtitle> */}
                <Card.Subtitle className="mb-2 text-muted"><b>Año:</b> <span className={ ("year" == tipoBusqueda)? "bg-warning":""}> {item.year}</span></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><b>Director:</b> <span className={ ("director" == tipoBusqueda)? "bg-warning":""}>{item.director}</span></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><b>Rama:</b> <span className={ ("areas" == tipoBusqueda)? "bg-warning":""}>{item.areas}</span></Card.Subtitle>
                <Card.Text>
                {item.resumen}
                </Card.Text>
                <Card.Link href="#">Ver más</Card.Link>
                <Card.Link href="#">Leer</Card.Link>
                <Card.Link href="#">Citar</Card.Link>
                </Card.Body>
            </Card>
        )})
        )
    }
    </>
  )
}
