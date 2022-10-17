import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Header';
import './components/GlobalStyles.css'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/sig-up' element={<SignUp />}/>
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
