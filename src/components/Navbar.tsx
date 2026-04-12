import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.venue'), path: '/mekan' },
    { name: t('nav.experience'), path: '/deneyim' },
    { name: t('nav.booking'), path: '/rezervasyon' },
    { name: t('nav.contact'), path: '/iletisim' },
  ];

  return (
    <nav className="navbar-v2">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          HAN<span>GAME</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <div className="lang-toggle">
              <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? 'active' : ''}>TR</button>
              <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
            </div>
            <Link to="/rezervasyon" className="nav-btn" onClick={() => setIsOpen(false)}>
              {t('nav.book_now')}
            </Link>
          </div>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger ${isOpen ? 'active' : ''}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
