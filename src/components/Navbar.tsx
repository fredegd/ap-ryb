import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import faviconLG from '../assets/favicon_LG.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition duration-300 ${isActive ? 'text-neon-yellow font-bold' : 'text-gray-50 hover:text-neon-yellow'}`;

  const contactButtonClass = ({ isActive }: { isActive: boolean }) =>
    `py-1 px-4 border rounded-full transition duration-300 ${isActive ? 'border-neon-yellow bg-neon-yellow text-dark-bg font-bold' : 'border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-dark-bg'}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-bold transition duration-300 ${isActive ? 'text-neon-yellow' : 'text-gray-50 hover:text-neon-yellow'}`;
    
  return (
    <header className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-neon-yellow/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={faviconLG} alt="AP Logo" className="w-12 h-12" />
          <span className="text-xs font-normal tracking-wider text-neon-yellow/80">Massoterapista & Chinesiologo</span>
        </NavLink>
        <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <NavLink to="/#about" onClick={() => handleScroll('about')} className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Servizi</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} className={contactButtonClass}>Contatti</NavLink>
        </nav>
        <button className="md:hidden text-neon-yellow focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-dark-bg z-40 flex flex-col items-center justify-center space-y-8">
          <NavLink to="/#about" onClick={() => handleScroll('about')} className={mobileNavLinkClass}>About</NavLink>
          <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Servizi</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Blog</NavLink>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} className={mobileNavLinkClass}>Contatti</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
