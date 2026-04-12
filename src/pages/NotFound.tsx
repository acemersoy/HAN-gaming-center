import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404 - Sayfa Bulunamadı" description="Aradığınız sayfa bulunamadı. Han Game Center ana sayfasına dönün." />
      <div className="not-found">
        <div className="container center-content">
          <h1 className="glitch">404</h1>
          <h2>GAME <span className="highlight">OVER</span></h2>
          <p>Aradığınız harita (sayfa) şu anda erişilebilir değil ya da silinmiş.</p>
          <Link to="/" className="btn-primary">Ana Üsse Dön</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
