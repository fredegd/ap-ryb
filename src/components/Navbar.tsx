import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import faviconLG from '../assets/favicon_LG.svg';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

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
    `text-sm font-medium  ${isActive ? ' font-bold text-[#F4C825]' : ''}`;


  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-4xl font-bold  ${isActive ? 'font-bold text-[#F4C825]' : ''}`;

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-all duration-300 ease-in-out 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={faviconLG} alt="AP Logo" className="w-12 h-12" />
          <span className="text-xs font-normal tracking-wider /80">RESET YOUR BODY</span>
        </NavLink>
        <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <NavLink to="/#about" onClick={() => handleScroll('about')} >About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Servizi</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} >Contatti</NavLink>
          <ThemeSwitch />
        </nav>
        <button className="md:hidden text-gray-900 dark: focus:outline-none z-101" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 w-full h-screen bg-white dark:bg-black z-100 grid place-items-center transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center w-full h-screen justify-center gap-8">
          <NavLink to="/#about" onClick={() => handleScroll('about')} >About</NavLink>
          <NavLink to="/services" className={mobileNavLinkClass}>Servizi</NavLink>
          <NavLink to="/blog" className={mobileNavLinkClass}>Blog</NavLink>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} >Contatti</NavLink>
          <div className="mt-4">
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
