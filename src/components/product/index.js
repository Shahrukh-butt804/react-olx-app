import React, { useEffect, useState } from "react";
import "../product/product.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card, Spinner,Button} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom"

import appPic from "./appPic.png"
import p1 from "./p1.png"
import p2 from "./p2.png"
import p3 from "./p3.png"



function Product() {

    const [items, setitem] = useState()
    const [isLoading, setloader] = useState(true)
    const navigate =useNavigate();



    useEffect(() => {
        // setloader(true);
        fetch("https://dummyjson.com/products")
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                setitem(data.products);
                setloader(false);
            });
    }, []);








    return (
        <>
            {isLoading ?
                <div className="container text-center mt-5" >
                <Spinner animation="border" role="status">
                   <span className="visually-hidden">Loading...</span>
               </Spinner> 
              </div>
                :
                <>

                    <div className="container mt-4">
                    <b className="mt-3 fs-2">All Items</b>

                    </div>
                  <Container className="ms-6" id="cards">


                {  items.map((e,index) => {
                            
                                return (
                                    <>
                                   <div className="container ms-0" id="cardss" key={e.id} style={{ width: '20rem' }}>
                                        <Card className='mt-4 box' style={{ height: '22rem' }}>
                                            <Card.Img variant="top" src={e.thumbnail} style={{ height: '13rem' }} />
                                            <Card.Body>
                                                <Card.Title>$ {e.price}</Card.Title>
                                                <Card.Text>
                                                    {e.title}
                                                </Card.Text>
                                                {/* <Link to="/details" className="btn btn-primary">Details</Link> */}
                                                <Button variant="primary" onClick={()=>
                                                    navigate(`/details/${e.id}`)
                                                }>Details</Button>
                                            </Card.Body>
                                        </Card>
                                      
                                    </div>
                                    </>)
                })
            }
            </Container>

            <div className="container d-flex" style={{height : "30%"}}>
                <div className="container me-4">
                <img src={appPic} alt="" style={{height : "70%", width: "125%"}} />
                </div>
                <div className="container ms-5"><h1 className="mb-3">Try the OLX app</h1>
                <p className="fs-5">Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div className="me-0 ms-2" id="hr"></div>


                <div className="container ms-4 ">
                <h5><b>GET YOUR APP TODAY</b></h5>
                <img  src={p1} alt="" style={{height : "17%"}}/>
                <img className="ms-2 me-2"  src={p2} alt="" style={{height : "17%"}} />
                <img src={p3} alt="" style={{height : "17%"}}/>
                </div>
            </div>
   
    



         
        </>
            }
    </>
    );
        }
export default Product;
