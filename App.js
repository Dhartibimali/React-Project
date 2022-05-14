import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productprovider from './Global/productDetails'
import AddCartProvider from './Global/AddCart'
import Product from './components/Product';
import Carts from './components/Carts';
import Notfound from './components/NotFound';
function App() {
  return (
    <div>
    <Productprovider>
      <AddCartProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/carts' element={<Carts/>}/>
          <Route  element={<Notfound/>}/>

        </Routes>
      </Router>
      </AddCartProvider>
     
    </Productprovider>
    </div>
  );
}

export default App;
