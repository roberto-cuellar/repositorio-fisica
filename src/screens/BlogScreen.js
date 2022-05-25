import React from 'react'
import { Container } from 'react-bootstrap'
import './blogStyles.css'
import { dataBlogMainPage,dataAreas } from '../helpers/blogData'
import { BlogItemsMain } from '../components/BlogItemsMain'


export const BlogScreen = () => {

    // console.log(dataBlogMainPage,dataAreas)
    

  return (
    <Container>

        <BlogItemsMain data={dataBlogMainPage} />

    </Container> 
    
  )
}
