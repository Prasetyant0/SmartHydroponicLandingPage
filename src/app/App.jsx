import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";
import LandingPage from "../pages/landing/LandingPage";
import ProductPage from "../pages/ProductPage";
import PrivacyPage from "../pages/legal/PrivacyPage";
import TermsPage from "../pages/legal/TermsPage";
import CookiesPage from "../pages/legal/CookiesPage";

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/privasi" element={<PrivacyPage />} />
        <Route path="/syarat" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
