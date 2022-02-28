import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import Register from './Components/Register';
import LoginForm from './Components/LoginForm';
import Mr from './Components/Mr';



function App() {
  return (
    <>
      {/* <ProductsList /> */}
      {/* <LoginForm /> */}
      {/* <Register /> */}

      <Navbar />
      <Routes>

        <Route path='/Home' element={<Home />} />
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/LoginForm' element={<LoginForm/>} />
        <Route path='/Mr' element={<Mr/>} />

      </Routes>



    </>
  );
}

export default App;
