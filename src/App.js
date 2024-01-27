import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product/index.js';

import Navv from './components/navbar/index.js';
import { NavDropdown,Nav,
         Container,Navbar,
         Carousel } from 'react-bootstrap';
import Footer from './components/footer/index.js';

function App() {
  return (

    <>
        <Navv />
        <Navbar expand="lg" className="font-weight-bold">
      <Container>


      <NavDropdown title="All Categories" className='' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Mobile Phones</Nav.Link>
            <Nav.Link href="#link">Cars</Nav.Link>
            <Nav.Link href="#home">Motor Cycles</Nav.Link>
            <Nav.Link href="#home">Houses</Nav.Link>
            <Nav.Link href="#home">Vedio-Audios</Nav.Link>
            <Nav.Link href="#home">Tablets</Nav.Link>
            <Nav.Link href="#home">Land And Plots</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       <hr/>

       <div className="container">
       <Carousel>
      <Carousel.Item interval={500}>
        <img className='d-block ' width={1300} height={200}
         src="https://images.olx.com.pk/thumbnails/424970966-800x600.webp"
          alt="" text="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='d-block' width={1300} height={200}
         src="https://images.olx.com.pk/thumbnails/424970966-800x600.webp" alt=""  text="Second slide"/>
      </Carousel.Item>
    </Carousel>
       </div>






    </>
  );
}

export default App;
