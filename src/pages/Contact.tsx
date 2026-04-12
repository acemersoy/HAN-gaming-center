import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/Contact.css';

const Contact = () => {
  const address = "Merkez Yenice Mah. Yol Üstü, Bina No: 72, AYBÜ giriş kapısı, A101 yanı, Esenboğa/Ankara";

  return (
    <Layout>
      <SEO title="İletişim | Han Game Center" description="AYBÜ kapısının hemen yanı, A101 bitişiği. Han Game Center adres ve telefon bilgileri." />
      <div className="contact-page">
        <header className="contact-header">
          <div className="container">
            <h1>İLETİŞİM / YOL TARİFİ</h1>
          </div>
        </header>

        <section className="contact-body">
          <div className="container">
            <div className="contact-card">
              <div className="info-section">
                <div className="info-group">
                  <label>AÇIK ADRES</label>
                  <p>{address}</p>
                </div>
                <div className="info-group important">
                  <label>TARİF</label>
                  <p>Ankara Yıldırım Beyazıt Üniversitesi (AYBÜ) ana giriş kapısının tam yanındayız. A101 marketin bitişiğindeki dükkan.</p>
                </div>
                <div className="info-group">
                  <label>TELEFON</label>
                  <p className="phone">0555 555 55 55</p>
                </div>
                <div className="info-group">
                  <label>INSTAGRAM</label>
                  <p>@han.game.center</p>
                </div>
                <div className="action-buttons">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=40.22,32.99" className="btn-primary">HARİTALARDA AÇ</a>
                </div>
              </div>
              <div className="map-section">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.2!2d32.99!3d40.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEzJzEyLjAiTiAzMsKwNTknMjQuMCJF!5e0!3m2!1str!2str!4v1700000000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Han Game Center Lokasyon"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
