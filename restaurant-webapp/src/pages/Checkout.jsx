import { useNavigate, useLocation } from 'react-router-dom';
import cardIcon from '../assets/credit-card-pay-svgrepo-com.svg';
import cashIcon from '../assets/cash-svgrepo-com.svg';

function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const total = state?.total ?? 0;

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Choisir méthode de paiement</h1>

      <div className="payment-options">
        <button className="payment-btn" onClick={() => navigate('/stripe', { state: { total } })}>
          <img src={cardIcon} alt="Carte bancaire" className="payment-icon"/>
          <span>Carte bancaire</span>
        </button>

        <button className="payment-btn" onClick={() => alert('QR Code généré', { state: { total } })}>
          <img src={cashIcon} alt="Espèces" className="payment-icon" />
          <span>Cash</span>
        </button>
      </div>

      <button className="back-btn" onClick={() => navigate('/menu')}>Retour</button>
    </div>
  );
}

export default Checkout;