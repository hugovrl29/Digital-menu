import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import cardIcon from '../assets/credit-card-pay-svgrepo-com.svg';
import cashIcon from '../assets/cash-svgrepo-com.svg';
import CashQRModal from '../components/CashQRModal';

function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const total = state?.total ?? 0;

  const [showCashModal, setShowCashModal] = useState(false);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Choisir méthode de paiement</h1>

      <div className="payment-options">
        <button className="payment-btn" onClick={() => navigate('/stripe', { state: { total } })}>
          <img src={cardIcon} alt="Carte bancaire" className="payment-icon"/>
          <span>Carte bancaire</span>
        </button>

        <button className="payment-btn" onClick={() => setShowCashModal(true)}>
          <img src={cashIcon} alt="Espèces" className="payment-icon" />
          <span>Cash</span>
        </button>
      </div>

      <button className="back-btn" onClick={() => navigate('/menu')}>Retour</button>

      {/* Modal QR Cash */}
      <CashQRModal
        open={showCashModal}
        onClose={() => setShowCashModal(false)}
        total={total}
        table={1}
      />

    </div>
  );
}

export default Checkout;