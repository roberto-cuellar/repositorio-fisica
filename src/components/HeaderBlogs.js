// ESTE COMPONENTE DE REACT ESTÁ EXTREMADAMENTE LARGO, ES UNA VERSIÓN DE PRUEBA QUE SE DEBE OPTIMIZA

import React from 'react'
import { Container, Card, Button, CardGroup, Row,Col } from 'react-bootstrap'
import { EmailForm } from './EmailForm'


export const HeaderBlogs = ({data}) => {
    console.log(data)
  return (
      <div className='animate__animated animate__fadeIn'>
    <>
{/* Header */}
        <Container fluid className='pl-5 pr-5 mb-3 contenedorHeaderBlogItem'>
            <Row>
                <Col>
                    <h1 className='tituloBlogItem'>{data.titulo}</h1>
                    <p>{data.resumen}</p>
                    <p className='dateData'>Por {data.autor} <span>{data.fecha}</span></p>
                </Col>
                <Col>
                <img src={data.imgResumen} style={{width: "100%"}} className='mainImageBlogItem'/>
                </Col>
            </Row>
        </Container>
{/* Contenido  */}
        <Container>
            <p>
                <span className='firstLetter'>L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h4>Where does it come from?</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <figure>
            <img className='bodyImageBlogItem' src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            <figcaption>Proyecto realizandose, fuente[1]</figcaption>
            </figure>
            <p>
                <span>L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h4>Where can I get some?</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <iframe src="https://trinket.io/embed/python/f703342979?runOption=run&start=result&showInstructions=true" width="100%" height="500" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </Container>
{/* Referencias */}
<Container>
    <h5>Referencias</h5>
    <ol className='referenciasBlogItem'>
        <hr/>
        <li>
            <p>Ashkin, A. Acceleration and trapping of particles by radiation pressure. Phys. Rev. Lett. 24, 156–159 (1970).</p>        
            <div className='linksRefBlogItem'><p><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></p></div>
        </li>
        <hr/>
        <li>
            <p>Friese, M. E. J., Enger, J., Rubinsztein-Dunlop, H. & Heckenberg, N. R. Optical angular-momentum transfer to trapped absorbing particles. Phys. Rev. A 54, 1593–1596 (1996).</p>        
            <div className='linksRefBlogItem'><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></div>
        </li>
        <hr/>
        <li>
            <p>Simpson, N. B., Dholakia, K., Allen, L. & Padgett, M. J. Mechanical equivalence of spin and orbital angular momentum of light: an optical spanner. Opt. Lett. 22, 52–54 (1997).</p>        
            <div className='linksRefBlogItem'><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></div>
        </li>
        <hr/>
        <li>
            <p>Fällman, E. & Axner, O. Design for fully steerable dual-trap optical tweezers. Appl. Opt. 36, 2107–2113 (1997).</p>        
            <div className='linksRefBlogItem'><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></div>
        </li>
        <hr/>
        <li>
            <p>Reicherter, M., Haist, T., Wagemann, E. U. & Tiziani, H. J. Optical particle trapping with computer-generated holograms written on a liquid-crystal display. Opt. Lett. 24, 608–610 (1999).</p>        
            <div className='linksRefBlogItem'><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></div>
        </li>
        <hr/>
        <li>
            <p>Grier, D. G. A revolution in optical manipulation. Nature 424, 810–816 (2003).</p>        
            <div className='linksRefBlogItem'><a href="#">ADS</a><a href="#">Artículo</a><a href="#">Google Scholar</a></div>
        </li>
        <hr/>
    </ol>
</Container>

{/* Acerca del autor */}
    
<Container>
    <h5>Acerca del autor</h5>
    <Container className='contenedorHeaderBlogItem'>
        <Row>
            <Col xs={2}>
            <img className='autorBlogItem' src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7WCqVWwAAAAJ&citpid=3" alt='Jorge Enrique Rueda Editor principal'  />
            </Col>
            <Col xs={6}>
                <h3>{data.autor}</h3>
                <small>Editor Principal</small>
                <p>
                    Ricardo Baeza Yates es Ph.D. en Computer Science (Univ. of Waterloo, Canadá, 1989), Magister en Ing. Eléctrica (1986) y Cs. de la Computación (1985) de la Univ. de Chile; e Ingeniero Civil Eléctrico de la misma universidad. Actualmente es Profesor Titular en el Depto. de Cs. de la Computación de la Univ. de Chile y sus áreas de investigación son algoritmos, bases de datos documentales y visualización. Es co-autor de un Handbook de algoritmos (Addison-Wesley, 1991) y co-editor de un libro en recuperación de la información (Prentice-Hall, 1992), además de numerosas actas de congresos, publicaciones internacionales y nacionales. Es el presidente de la Sociedad Chilena de Ciencia de la Computación (1997-1998), cargo que ocupó tambien desde el año 1993 al 1995.
                </p>
                <div className='linksRefBlogItem'><a href="#">Cvlac</a><a href="#">Orcid</a><a href="#">Google Scholar</a></div>
            </Col>
        </Row>
    </Container>
    
</Container>

{/* Dejar un comentario */}
<Container>
    <h5>Hacer un comentario</h5>
    <p>Su email no será publicado. Los campos requeridos están marcados por *</p>
    <form>
        
        <label >Comentario*</label>
        <br/>
        <textarea id="comentario" rows="4" cols="46"></textarea>
        <br/>
        <input type="text" placeholder='Nombre*' autoComplete='off'/>
        <input type="email" placeholder='Email*' autoComplete='off'/>
        <br/>
        <input type="checkbox" id="scales" name="guardarDatos"/>
        <label >Guardar mi nombre y email para la siguiente vez que realice un comentario</label>
        <br/>
    
    </form>

</Container>

    {/* Enviar Correo*/}
<Container>
    <hr/>
    <h5>Contactanos</h5>
    <p>Su email no será publicado. Los campos requeridos están marcados por *</p>
    <EmailForm />

</Container>






    
    </>
    </div>
  )
}
