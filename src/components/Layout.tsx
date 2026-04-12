import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import MobileStickyBar from './MobileStickyBar';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="app-layout">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={window.location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="page-content"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <MobileStickyBar />
      
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-top-grid">
            {/* Sütun 1: Marka ve Konum */}
            <div className="footer-main-col">
              <h3 className="footer-logo">HAN<span>GAME</span></h3>
              <p className="footer-description">
                Esenboğa’nın ilk e-spor merkezi. AYBÜ ana giriş kapısının tam yanında, 
                performans ve sosyal oyun atmosferini tek çatı altında topluyoruz.
              </p>
              <div className="footer-address-box">
                <label>LOKASYON</label>
                <p>Merkez Yenice Mah. Bina No: 72 <br/> (A101 Yanı) Esenboğa / Ankara</p>
              </div>
            </div>

            {/* Sütun 2: Navigasyon */}
            <div className="footer-link-col">
              <h4>KEŞFET</h4>
              <ul>
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/mekan">{t('nav.venue')}</Link></li>
                <li><Link to="/deneyim">{t('nav.experience')}</Link></li>
                <li><Link to="/rezervasyon">{t('nav.booking')}</Link></li>
                <li><Link to="/iletisim">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            {/* Sütun 3: Teknik Detay & Saatler */}
            <div className="footer-link-col">
              <h4>MESAİ SAATLERİ</h4>
              <ul className="hours-list">
                <li><span>PAZARTESİ - CUMA</span> <strong>09:00 - 00:00</strong></li>
                <li><span>CUMARTESİ - PAZAR</span> <strong>09:00 - 02:00</strong></li>
                <li><small>Gece seansları için önceden yazınız.</small></li>
              </ul>
            </div>

            {/* Sütun 4: İletişim */}
            <div className="footer-link-col">
              <h4>İLETİŞİM</h4>
              <div className="footer-contact-actions">
                <a href="tel:+905555555555" className="contact-item">0555 555 55 55</a>
                <a href="https://instagram.com/han.game.center" target="_blank" rel="noreferrer" className="contact-item">INSTAGRAM / HAN.GAME</a>
                <a href="https://wa.me/905555555555" className="footer-btn">WHATSAPP'TAN YAZ</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>© 2026 HAN GAME CENTER / ESENBOĞA. TÜM HAKLARI SAKLIDIR.</p>
            <div className="footer-meta">
              <span>LAT: 40.22</span>
              <span>LNG: 32.99</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
