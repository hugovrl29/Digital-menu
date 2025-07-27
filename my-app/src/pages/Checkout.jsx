import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="centered">
      <h1>Checkout</h1>
      <button onClick={() => alert('Stripe flow soon...')}>Payer avec Stripe</button>
      <button onClick={() => alert('QR Code généré')}>Paiement en cash</button>
      <button onClick={() => navigate('/menu')}>Retour</button>
    </div>
  );
}

export default Checkout;
