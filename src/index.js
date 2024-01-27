import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navv from './components/navbar/index.js';
import Product from './components/product/index.js';
import Details from './components/details/index.js';

import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/index.js';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //   <Nav/>
  //   {/* <App /> */}
  //  <Product/>
  //  {/* <Nav/> */}
  // {/* <Details/> */}
  // <Footer/>
  
    <React.StrictMode>
  <BrowserRouter>
  <App/>
  <Routes path="/">
    <Route path="" element={<Product/>} /> 
    <Route path="details/:id" element={<Details/>} /> 
  </Routes>
  <Footer/>
</BrowserRouter>
  </React.StrictMode>
  


);

reportWebVitals();
