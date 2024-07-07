import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/singleProduct/:id' element={<SingleProduct />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
