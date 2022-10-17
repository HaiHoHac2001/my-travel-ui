import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import images from '../assets/images';

import './Header.css'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [title, setTitle] = useState('');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }else {
      setButton(true);
    }
  }

  // change the title when user input on browser
  useEffect(() =>{
    document.title = title;
  });

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="header">
        <div className="header-container">
          <Link className='header-logo' to="/" onClick={closeMobileMenu}>
            TRVL<i className="header-logo-icon fa-brands fa-typo3"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ?'fas fa-times':'fas fa-bars'}></i>
          </div>
          {/* header search with two way binding */}
          <div className='nav-search'>
            <input 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='input-search'
              placeholder='Tìm điểm đến, sản phẩm, ...'
            />
            <div className='icon-search'>
              <img className='icon-search-header' src={images.searchIcon}></img>
            </div>
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/products" className='nav-links-mobile' onClick={closeMobileMenu}>
                Sing Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Header