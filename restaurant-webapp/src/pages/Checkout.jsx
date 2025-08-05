import { useNavigate } from 'react-router-dom';
import cardIcon from '../assets/credit-card-pay-svgrepo-com.svg';
import cashIcon from '../assets/cash-svgrepo-com.svg';

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Choisir méthode de paiement</h1>

      <div className="payment-options">
        <button className="payment-btn" onClick={() => alert('Stripe flow soon...')}>
          <img src={cardIcon} alt="Carte bancaire" className="payment-icon"/>
          <span>Carte bancaire</span>
        </button>

        <button className="payment-btn" onClick={() => alert('QR Code généré')}>
          <img src={cashIcon} alt="Espèces" className="payment-icon" />
          <span>Cash</span>
        </button>
      </div>

      <button className="back-btn" onClick={() => navigate('/menu')}>Retour</button>
    </div>
  );
}

export default Checkout;