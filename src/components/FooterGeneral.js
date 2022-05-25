import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import icono from '../helpers/favicon.ico'
export const FooterGeneral = () => {
  return (
    <div className='footerGeneral'>
        {/* <Container> */}
            <Row>
                <Col xs={{order: 'first'}}>
                    <img src={icono} className="footerIconBrand"/>
                    <h4 className='footerTitle'>REPOUP</h4>
                    <h5 className='footerSubtitle'>REPOSITÓRIO DEL PROGRAMA DE FÍSICA DE LA UNIVERSIDAD DE PAMPLONA</h5>
                    <p className='footerDescription'>Repoup es un proyecto <em>Open Source</em> que surge bajo la iniciativa de los profesores adscritos
                    a la Universidad de Pamplona Lorena Villamizar, Jorge Enrique Rueda en conjunto con Roberto Cuellar, egresado de 
                    la misma. Si desea realizar alguna contribución o reporte de Bugs, por favor visite el  <a href="#">repositório</a> del proyecto en Github</p>
                </Col>
                
                <Col xs={{order: 'last'}}>
                    
                    <div className='footerQuickLinks'>
                        <h5>Quick links</h5>
                        <p><a href='#'>Donate</a></p>
                        <p><a href='#'>Privacy Policy</a></p>
                        <p><a href='#'>Terms of Service</a></p>
                        <p><a href='#'>Contribute with Development</a></p>
                        <p><a href='#'>Report a Bug</a></p>
                    </div>
                    <div className='socialMedia'>          
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" /></svg>
                        <svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg"> <path   fillRule="evenodd"    clipRule="evenodd"    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"    fill="currentColor"  /></svg>
                        <svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg">  <path    fillRule="evenodd"    clipRule="evenodd"    d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z"    fill="currentColor"  /></svg>  
                    </div>
                </Col>
            </Row>
        {/* </Container> */}
        <hr/>
        <small>2022 REPOUP, All rights reserved</small>
    </div>
  )
}
