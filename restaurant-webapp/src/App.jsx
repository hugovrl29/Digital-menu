// Vite + React Starter with basic routing and static mockup
// You need to run: npm create vite@latest my-app --template react
// Then replace src/App.jsx with the following code and create the components as described below.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelector from './pages/LanguageSelector';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import StripePayment from './pages/StripePayment';
import ThankYou from './pages/ThankYou';
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
    </Router>
  );
}

export default App;
