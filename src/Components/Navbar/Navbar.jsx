import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../LogoFolder/Logo';
import './Navbar.css';

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className={`navbar ${hideNavbar ? 'hidden' : ''}`}>
      <Logo />
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-ul'>
          <li className='nav-li'><Link to="home-section" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li className='nav-li'><Link to="services-section" smooth={true} duration={500} onClick={closeMenu}>Services</Link></li>
          <li className='nav-li'><Link to="project-section" smooth={true} duration={500} onClick={closeMenu}>Our Project</Link></li>
          <li className='nav-li'><Link to="" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
        <i className="ri-menu-line" onClick={toggleMenu}></i>
      </nav>
      <a href="#" className="contact-btn">Contact Us</a>
    </header>
  );
};

export default Navbar;
