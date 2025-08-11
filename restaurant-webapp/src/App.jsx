// Vite + React Starter with basic routing and static mockup
// You need to run: npm create vite@latest my-app --template react
// Then replace src/App.jsx with the following code and create the components as described below.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelector from './pages/LanguageSelector';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import StripePayment from './pages/StripePayment';
import ThankYou from './pages/ThankYou';
import ScreensaverOverlay from './components/ScreenSaverOverlay';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelector />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stripe" element={<StripePayment />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <ScreensaverOverlay
        idleMs={120000} // 2 minutes
        youtubeLiveUrl="https://www.youtube.com/embed/l8PMl7tUDIE?si=CHFM5yKIvmd_Bh_l"
      />
    </Router>
  );
}

export default App;
