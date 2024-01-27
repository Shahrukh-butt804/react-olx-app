
import './navv.css';
import pic from './pic.png';
import { Navbar, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import Product from '../product';


function Navv() {
  return (
    <>
  
      <div className="container-fluid" id='nav-control' >
        <div className="container ">


          <div className="row fs-6">
            <ul className='d-flex gap-5  list-unstyled mt-4'>
              <li><div className="container gap-3"><img src="https://1000logos.net/wp-content/uploads/2020/09/OLX-logo.jpg" alt="" style={{ width: "40px" }} /></div></li>
              <li><FontAwesomeIcon icon={faCar} /> MOTORS</li>
              <li><FontAwesomeIcon icon={faBuildingColumns} /> PROPERTY</li>
            </ul>
          </div>
        </div>




       



      













      <div className="container-fluid" id='main' >
        <div className="container pt-3  ms-5 row" id="one">


        </div>
        <div className="container ms-4 row" id='two'>
          <Navbar className=" ms-5 bg-dark-tertiary align-items-center" id='navbar'>
            <img id='img' className='me-3 p-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpaF5yximoO2qtyxxDEXbonwUOYDMa71iki4LQ74gDQ&s" alt="" />
            <Form inline>
              <InputGroup>



                <Form.Control id='input1'
                  placeholder="Pakistan"
                  aria-label="Location"
                  aria-describedby="basic-addon1"
                />

              </InputGroup>
            </Form>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control id='input2'
                    type="text"
                    placeholder="Find Cars, Mobile Phones And More..."
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <b className='mt-4 text-decoration-underline fs-5'>Login</b>
                </Col>
                <Col xs="auto">
                  <img id='pic' src={pic} alt="" />

                </Col>
              </Row>
            </Form>
          </Navbar>

        </div>
      </div>
      </div>
    

    </>

  );
}

export default Navv;
