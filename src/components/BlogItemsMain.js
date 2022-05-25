import React from 'react'
import { BlogItem } from './BlogItem'
import { Container, Card, Button, CardGroup, Row,Col } from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'
import '../screens/blogStyles.css'


export const BlogItemsMain = ({data}) => {
    console.log("Datos en blog itemsMain: ",data)
  return (
    <>

        

        <h1 className='mt-3'>Blog destacado de la semana</h1>
        {
            data.map((item,index)=>
            (index===0)&&
            (<Card key={item.id} style={{ width: '80%' }} className='mt-3' >
                <div className='contenedor'><Card.Img variant="top" src={item.imgResumen} className='expand' /></div>
                <Card.Body>
                    <Card.Title className='blogItemTitle'>{item.titulo}</Card.Title>
                    <Card.Text>
                    {item.resumen}
                    </Card.Text>
                    <Card.Text className='blogAutor'>
                    <span>Por</span> {item.autor}
                    <span><p>{item.fecha}</p></span>
                    </Card.Text>
                    
                    <Link  to="/blogTest" className='links'><Button className='buttonBlogs' variant="outline-secondary" >Leer</Button></Link>
                </Card.Body>
            </Card>)
            )
        }
        <h2 className='mt-3'>Los más visitados</h2>
        <CardGroup className='text-center mb-3'>
            {data.map((item,index) =>
                (index !==0)&&
                (<Card key={item.id} style={{ width: '18rem' }} className='mt-3 text-center"' >
                <div className='contenedor'><Card.Img variant="top" src={item.imgResumen} className='expand' /></div>
                <Card.Body>
                   <Card.Title className='blogItemTitle'>{item.titulo}</Card.Title>
                    <Card.Text>
                    {item.resumen}
                    </Card.Text>
                    <Card.Text className='blogAutor'>
                    <span>Por</span> {item.autor}
                    <span><p>{item.fecha}</p></span>
                    </Card.Text>
                    <Button className='buttonBlogs' variant="outline-secondary">Leer</Button>
                </Card.Body>
            </Card>)
            )

            }
        </CardGroup>
                        
            
        
    </>
  )
}
