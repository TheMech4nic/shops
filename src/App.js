import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Container } from 'react-bootstrap';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'

function App() {
  return (
      <div>
      <Header />
      <Container>
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/about' element ={<About />} />
        <Route path='/cart' element ={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
      </div>
    
  );
}

export default App;
