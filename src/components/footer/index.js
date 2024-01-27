import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, NavDropdown, Nav,
    Container, Navbar,
    Carousel, Card, Spinner, Shadow, Row, Col, Box, Grid
} from 'react-bootstrap';
import "./footer.css"
import p1 from "../product/p1.png"
import p2 from "../product/p2.png"
import p3 from "../product/p3.png"

function Footer() {

    return (
        <>
            <footer id="footer">
                <div className="container ms-6 ">
                    <div className="row">
                        <div className="col">

                            <h3>Popular Categories</h3>
                            <ul className="list-unstyled">
                                <li>Cars</li>
                                <li>Flats For Rent</li>
                                <li>Mobile Phones</li>
                                <li>Jobs</li>
                            </ul>
                        </div>

                        <div className="col">

                            <h3>Trending Searches</h3>
                            <ul className="list-unstyled">
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>



                        <div className="col">

                            <h3>About Us</h3>
                            <ul className="list-unstyled">
                                <li>About Dubizzle group</li>
                                <li>OLX Blogs</li>
                                <li>Contact Us</li>
                                <li>Olx For Buiseness</li>
                            </ul>
                        </div>


                        <div className="col">

                            <h3>OLX</h3>
                            <ul className="list-unstyled">
                                <li>Help</li>
                                <li>Site Map</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>


                        <div className="col">

                            <div className="container">
                                <h5><b>GET YOUR APP TODAY</b></h5>
                                <img src={p1} alt="" style={{ height: "7%", width: "32%" }} />
                                <img className="ms-2 me-2" src={p2} alt="" style={{ height: "7%", width: "32%" }} />
                                <img src={p3} alt="" style={{ height: "7%", width: "32%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="div-bottom">
                    <p>
                    Free Classifieds in Pakistan . © 2006-2024 OLX
                    </p>
                </div>
            </footer>

        </>

    );
}
export default Footer;


