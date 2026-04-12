import '../styles/MobileStickyBar.css';

const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar">
      <a href="tel:+905555555555" className="sticky-item call">
        <span className="sticky-icon">📞</span>
        <span>Ara</span>
      </a>
      <a href="https://wa.me/905555555555?text=Merhaba, yer sormak istiyorum." className="sticky-item whatsapp">
        <span className="sticky-icon">💬</span>
        <span>WhatsApp</span>
      </a>
      <a href="https://www.google.com/maps/dir/?api=1&destination=AYBÜ+Yenice+Yerleşkesi+Han+Game+Center" className="sticky-item directions">
        <span className="sticky-icon">📍</span>
        <span>Yol Tarifi</span>
      </a>
    </div>
  );
};

export default MobileStickyBar;
