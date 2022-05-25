import React from 'react'
import {dataBlogMainPage} from '../helpers/blogData.js'
import { Container, Card, Button, CardGroup, Row,Col } from 'react-bootstrap'
import { HeaderBlogs } from './HeaderBlogs'

export const BlogTest1 = () => {
  
  
  

  return (
    <>
        
         <HeaderBlogs data={dataBlogMainPage[0]}/> {/*Crear la carta nuevamente como header de la página del blog */}

    </>
  )
}
