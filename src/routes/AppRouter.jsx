import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, ListingsPage } from "../pages";
import SingleCarPage from "../pages/SingleCar/SingleCarPage";
import ScrollToTop from "../components/common/ScrollToTop";
import NotFound from "../pages/NotFound/NotFound";
import { Navbar, Footer } from "../components";
import { LanguageProvider } from "../hooks/useLanguage";
import MaintenancePage from "../pages/Maintenance/MaintenancePage";

const AppRouter = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/listing" exact element={<ListingsPage />} />
            <Route
              path="/listing/:registration/:vehicleType"
              element={<SingleCarPage />}
              exact
            />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default AppRouter;
