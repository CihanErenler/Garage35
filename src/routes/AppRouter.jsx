import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, ListingsPage } from "../pages";
import SingleCarPage from "../pages/SingleCarPage";
import ScrollToTop from "../components/common/ScrollToTop";
import { Navbar, Footer } from "../components";
import { LanguageProvider } from "../hooks/useLanguage";

const AppRouter = () => {
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
            <Route
              path="/listing/:registration/:vehicleType"
              element={<SingleCarPage />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default AppRouter;
