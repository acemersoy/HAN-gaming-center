import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <Layout>
      <SEO 
        title="Oyun Deneyimi | Han Game Center" 
        description="Han Game Center’da e-spor rekabeti, turnuvalar ve sosyal atmosferi keşfedin. RTX 4060 performansını hissedin." 
      />
      
      <div className="experience-v2">
        
        {/* Section 1: Adrenaline (Competitive) */}
        <section className="parallax-section">
          <div className="parallax-bg adrenaline-bg"></div>
          <div className="parallax-overlay"></div>
          <div className="container relative-content">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-box"
            >
              <label>01 / PERFORMANS</label>
              <h2>PING DÜŞÜK, <br/>ADRENALİN YÜKSEK.</h2>
              <div className="box-content">
                <p>E-spor standartlarında donanım ile farkını koy. Gecikme yok, sadece galibiyet var.</p>
                <ul className="bullet-list">
                  <li><strong>SUB-10MS PING:</strong> Valorant ve CS2 için stabilize fiber.</li>
                  <li><strong>HIGH FPS:</strong> RTX 4060/3060 serisi ile kesintisiz akış.</li>
                  <li><strong>PRO GEAR:</strong> Mekanik anahtarlar ve 1ms tepki süresi.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Social (The Vibes) */}
        <section className="parallax-section">
          <div className="parallax-bg social-bg"></div>
          <div className="parallax-overlay dark"></div>
          <div className="container relative-content flex-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-box"
            >
              <label>02 / ATMOSFER</label>
              <h2>DERSTEN ÇIK, <br/>EKİBİ TOPLA.</h2>
              <div className="box-content">
                <p>Han, sadece oyun yeri değil; AYBÜ öğrencilerinin ana üssüdür.</p>
                <ul className="bullet-list">
                  <li><strong>FIFA & NBA SEANSLARI:</strong> PS5 koltuklarında dev ekran keyfi.</li>
                  <li><strong>KAMPÜS DİBİ:</strong> AYBÜ girişinden yürüyerek sadece 1 dakika.</li>
                  <li><strong>EKİP BOYU:</strong> Yan yana masalarda 5v5 taktiksel avantaj.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Tournaments (Events) */}
        <section className="parallax-section">
          <div className="parallax-bg tourney-bg"></div>
          <div className="parallax-overlay"></div>
          <div className="container relative-content">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-box"
            >
              <label>03 / TURNUVALAR</label>
              <h2>YEREL ÖDÜLLÜ <br/>KAPIŞMALAR.</h2>
              <div className="box-content">
                <p>Belli aralıklarla düzenlediğimiz etkinliklerde adını duyur.</p>
                <ul className="bullet-list">
                  <li><strong>VALORANT CUP:</strong> Esenboğa'nın en iyi takımı kim?</li>
                  <li><strong>FC 25 TURNUVASI:</strong> PS5 alanında solo kapışmalar.</li>
                  <li><strong>ÖDÜLLER:</strong> Ücretsiz saatler, ekipmanlar ve sürprizler.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Snack & Cafe (Fuel) */}
        <section className="parallax-section">
          <div className="parallax-bg cafe-bg"></div>
          <div className="parallax-overlay dark"></div>
          <div className="container relative-content flex-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-box"
            >
              <label>04 / ENERJİ</label>
              <h2>OYUNUN YANINDA <br/>TAM TAKVİYE.</h2>
              <div className="box-content">
                <p>Uzun seanslarda enerjin asla düşmesin.</p>
                <ul className="bullet-list">
                  <li><strong>ENERGY HUB:</strong> Soğuk Monster, RedBull ve Burn seçenekleri.</li>
                  <li><strong>HOT CORNER:</strong> Taze çekirdek kahve ve çay molası.</li>
                  <li><strong>SNACK BAR:</strong> Oyunun ritmini bozmayan pratik atıştırmalıklar.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Block */}
        <section className="experience-footer">
          <div className="container">
            <div className="faq-raw">
              <h3>AKLINDA OLSUN</h3>
              <div className="faq-grid-raw">
                <div className="faq-card">
                  <h4>KENDİ EKİPMANIMI GETİREBİLİR MİYİM?</h4>
                  <p>Tabii ki. Kendi mouse, kulaklık veya klavyeni getirip her masada tak-çalıştır yapabilirsin.</p>
                </div>
                <div className="faq-card">
                  <h4>GECE KAÇA KADAR AÇIKSINIZ?</h4>
                  <p>Hafta içi 00:00'a kadar, hafta sonları ise talebe göre 02:00 ve sonrasına kadar buradayız.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;
