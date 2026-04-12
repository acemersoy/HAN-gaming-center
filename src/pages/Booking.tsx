import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/Booking.css';

const Booking = () => {
  const whatsappNumber = "905555555555";

  return (
    <Layout>
      <SEO 
        title="Rezervasyon ve Paketler | Han Game Center" 
        description="Gelmeden önce yerini ayırt. Grup indirimleri, gece seansları ve öğrenci paketleri için WhatsApp'tan yazın." 
      />
      <div className="booking-v3">
        {/* Header */}
        <section className="booking-hero">
          <div className="container">
            <h1>YERİNİ <span className="red">AYIRT.</span></h1>
            <p>Sıra bekleme, arkadaşlarınla yan yana oyna.</p>
          </div>
        </section>

        {/* Main Action */}
        <section className="booking-main">
          <div className="container">
            <div className="booking-card-main">
              <div className="booking-visual"></div>
              <div className="booking-content">
                <h2>ANLIK YER DURUMU</h2>
                <p>Şu an dükkan ne kadar dolu? WhatsApp üzerinden tek tıkla sor, yerini 1 dakika içinde garantiye alalım.</p>
                <div className="booking-steps">
                  <div className="step"><span>1</span> YAZ</div>
                  <div className="step"><span>2</span> ONAY AL</div>
                  <div className="step"><span>3</span> GEL OYNA</div>
                </div>
                <a href={`https://wa.me/${whatsappNumber}?text=Merhaba, yer durumu sormak istiyorum.`} className="btn-primary full-width">WHATSAPP İLE SOR</a>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="packages">
          <div className="container">
            <div className="section-title">
              <h2>ÖZEL PAKETLER</h2>
              <div className="line"></div>
            </div>
            <div className="package-grid">
              <div className="pkg-card">
                <div className="pkg-img night-pkg-img"></div>
                <div className="pkg-body">
                  <h3>GECE SEANSI</h3>
                  <p>00:00 - 08:00 arası kesintisiz oyun keyfi. Uzun seanslar için en uygun paket.</p>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-img group-pkg-img"></div>
                <div className="pkg-body">
                  <h3>GRUP İNDİRİMİ</h3>
                  <p>5 kişi ve üzeri takımlar için yan yana masalar ve özel saatlik ücretler.</p>
                </div>
              </div>
              <div className="pkg-card">
                <div className="pkg-img student-pkg-img"></div>
                <div className="pkg-body">
                  <h3>ÖĞRENCİ DOSTU</h3>
                  <p>AYBÜ öğrencilerine özel günlük ve haftalık kampanya seçenekleri.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Booking;
