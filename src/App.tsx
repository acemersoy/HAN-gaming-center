import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Venue from './pages/Venue';
import Experience from './pages/Experience';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mekan" element={<Venue />} />
        <Route path="/deneyim" element={<Experience />} />
        <Route path="/rezervasyon" element={<Booking />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
