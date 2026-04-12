import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/Home.css';

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Han Game Center | AYBÜ Giriş Kapısı" 
        description="Esenboğa Yenice Mahallesi'nde, AYBÜ giriş kapısı yanında, A101 marketin bitişiğinde yer alan e-spor ve oyun merkezi." 
      />
      
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="location-badge">Ankara / Esenboğa</div>
          <h1>AYBÜ GİRİŞİNDE <br/> <span className="red">OYUNUN MERKEZİ.</span></h1>
          <p>
            Adresimiz net: AYBÜ ana giriş kapısının tam yanındayız. <br/>
            Düşük pingli PC'ler ve PlayStation 5 alanları ile ders arası veya akşam takılmaları için en yakın yer.
          </p>
          <div className="cta-group">
            <a href="https://www.google.com/maps/dir/?api=1&destination=40.22,32.99" target="_blank" rel="noreferrer" className="btn-primary">YOL TARİFİ AL</a>
            <a href="/rezervasyon" className="btn-secondary">YER DURUMU SOR</a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="highlights">
        <div className="container grid-cards">
          <div className="card">
            <div className="card-img pc-img"></div>
            <div className="card-body">
              <h3>DÜŞÜK PİNG / RTX</h3>
              <p>Valorant, CS2 ve LoL için fiber internet altyapısı ve NVIDIA RTX ekran kartlı masalar.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img ps-img"></div>
            <div className="card-body">
              <h3>PS5 / BÜYÜK EKRAN</h3>
              <p>Geniş koltuklar ve 4K ekranlarda FIFA 25, NBA 2K25 ve popüler konsol oyunları.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img campus-img"></div>
            <div className="card-body">
              <h3>KAMPÜSE 1 DAKİKA</h3>
              <p>AYBÜ ana girişinin dibindeyiz. A101 marketin hemen bitişiğindeki dükkan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social / CTA Section */}
      <section className="social-banner">
        <div className="container">
          <div className="banner-content">
            <h2>KAZANMAYA MI GELDİN, EĞLENMEYE Mİ?</h2>
            <p>Han Game Center'da her ikisi de mümkün. Topluluğumuza katıl.</p>
            <a href="https://instagram.com/han.game.center" target="_blank" rel="noreferrer" className="btn-primary">INSTAGRAM'DA TAKİP ET</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
