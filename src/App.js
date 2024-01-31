import React from 'react';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;