import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import faviconLG from '../assets/favicon_LG.svg';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current path matches route patterns for highlighting
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isBlogActive = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

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
    `text-sm font-medium transition duration-300 ${isActive ? 'text-neon-yellow font-bold' : 'text-gray-900 dark:text-gray-50 hover:text-neon-yellow'}`;

  const contactButtonClass = ({ isActive }: { isActive: boolean }) =>
    `py-1 px-4 rounded-full transition duration-300 ${isActive ? 'bg-neon-yellow text-black font-bold' : 'text-neon-yellow hover:bg-neon-yellow hover:text-black'}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-4xl font-bold transition duration-300 ${isActive ? 'text-neon-yellow' : 'text-gray-900 dark:text-gray-50 hover:text-neon-yellow'}`;

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-all duration-300 ease-in-out 
      dark:text-red-500
      ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={faviconLG} alt="AP Logo" className="w-12 h-12" />
          <span className="text-xs font-normal tracking-wider text-neon-yellow/80">RESET YOUR BODY</span>
        </NavLink>
        <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <NavLink to="/#about" onClick={() => handleScroll('about')} className={navLinkClass}>About</NavLink>
          <Link
            to="/services"
            className={isServicesActive
              ? 'text-sm font-bold transition duration-300 text-neon-yellow'
              : 'text-sm font-medium transition duration-300 text-gray-900 dark:text-gray-50 hover:text-neon-yellow'
            }
          >
            Servizi
          </Link>
          <Link
            to="/blog"
            className={isBlogActive
              ? 'text-sm font-bold transition duration-300 text-neon-yellow'
              : 'text-sm font-medium transition duration-300 text-gray-900 dark:text-gray-50 hover:text-neon-yellow'
            }
          >
            Blog
          </Link>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} className={contactButtonClass}>Contatti</NavLink>
          <ThemeSwitch />
        </nav>
        <button className="md:hidden text-gray-900 dark:text-neon-yellow focus:outline-none z-101" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 w-full h-screen bg-white dark:bg-black z-100 grid place-items-center transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center w-full h-screen justify-center gap-8">
          <NavLink to="/#about" onClick={() => handleScroll('about')} className={mobileNavLinkClass}>About</NavLink>
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={isServicesActive
              ? 'text-4xl font-bold transition duration-300 text-neon-yellow'
              : 'text-4xl font-bold transition duration-300 text-gray-900 dark:text-gray-50 hover:text-neon-yellow'
            }
          >
            Servizi
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={isBlogActive
              ? 'text-4xl font-bold transition duration-300 text-neon-yellow'
              : 'text-4xl font-bold transition duration-300 text-gray-900 dark:text-gray-50 hover:text-neon-yellow'
            }
          >
            Blog
          </Link>
          <NavLink to="/#contatti" onClick={() => handleScroll('contatti')} className={mobileNavLinkClass}>Contatti</NavLink>
          <div className="mt-4">
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
