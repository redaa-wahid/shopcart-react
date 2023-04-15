import React, {Fragment, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar/Nav-bar';
import data from './data.json';
import CartHome from './padges/CartHome/CartHome';
import Footer from './components/Footer/Footer';



function App() {
  const [product, setProduct]= useState(data);


  
  return (

   <Fragment>
   <Navbar/>
   <CartHome product={product}/>
   <Footer/>
   </Fragment>

  );
}

export default App;
