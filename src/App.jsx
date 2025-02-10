import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, About, ListingsPage } from './pages';
import ScrollToTop from './components/common/ScrollToTop';
import { LanguageProvider } from './hooks/useLanguage';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listing" element={<ListingsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;
