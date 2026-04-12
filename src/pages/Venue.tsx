import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/Venue.css';

const Venue = () => {
  return (
    <Layout>
      <SEO 
        title="Donanım ve Masalar | Han Game Center" 
        description="NVIDIA RTX 4060 ekran kartlı PC'ler, 144Hz monitörler ve PlayStation 5 alanları." 
      />
      <div className="venue-v3">
        {/* Intro */}
        <section className="venue-hero">
          <div className="container">
            <label>EKİPMAN VE KONFOR</label>
            <h1>MAKİNE <span className="red">PARKURU.</span></h1>
            <p>Esenboğa'nın en güncel e-spor donanımı ve sosyal alanları.</p>
          </div>
        </section>

        {/* PC Section */}
        <section className="venue-block">
          <div className="container">
            <div className="block-grid">
              <div className="block-image pc-big-img"></div>
              <div className="block-content">
                <h2>PC / E-SPOR MASALARI</h2>
                <p>Profesyonel oyuncular için sıfır gecikme, maksimum FPS hedefli sistemler.</p>
                <div className="spec-grid-v3">
                  <div className="spec-item">
                    <label>EKRAN KARTI</label>
                    <strong>NVIDIA RTX 4060 / 3060</strong>
                  </div>
                  <div className="spec-item">
                    <label>MONİTÖR</label>
                    <strong>144Hz / 1ms GAMING</strong>
                  </div>
                  <div className="spec-item">
                    <label>İŞLEMCİ</label>
                    <strong>INTEL CORE I5-13th GEN</strong>
                  </div>
                  <div className="spec-item">
                    <label>KLAVYE & MOUSE</label>
                    <strong>MECHANICAL BLUE SWITCH</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PS5 Section */}
        <section className="venue-block gray-bg">
          <div className="container">
            <div className="block-grid reverse">
              <div className="block-image ps5-big-img"></div>
              <div className="block-content">
                <h2>PS5 / KONSOL KÖŞESİ</h2>
                <p>Arkadaş grubunla FIFA veya NBA kapışmaları için tasarlanmış geniş alanlar.</p>
                <div className="spec-grid-v3">
                  <div className="spec-item">
                    <label>KONSOL</label>
                    <strong>PLAYSTATION 5</strong>
                  </div>
                  <div className="spec-item">
                    <label>EKRAN</label>
                    <strong>55" 4K ULTRA HD TV</strong>
                  </div>
                  <div className="spec-item">
                    <label>OYUNLAR</label>
                    <strong>FIFA 25, NBA 2K25, UFC</strong>
                  </div>
                  <div className="spec-item">
                    <label>KONFOR</label>
                    <strong>VIP PS5 KOLTUKLARI</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hygiene & Cleanliness */}
        <section className="hygiene-section">
          <div className="container">
            <div className="hygiene-card">
              <h3>DÜZEN VE TEMİZLİK</h3>
              <p>Her seans sonrası ekipmanlar dezenfekte edilmekte, dükkanımız düzenli olarak havalandırılmaktadır. Sağlıklı ve ferah bir oyun ortamı önceliğimizdir.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Venue;
