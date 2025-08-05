import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51RsbopCKGfv0pvPW1kBrJIqhbcpLxVwt8FeVXhs9SYSeMQcDcwOcAoBZNtKhKhFZ9gGH4prgTDFRi9i78IgQ6QkQ00oGc42ghw');

function StripePayment() {
    const location = useLocation();
    const total = location.state?.total || 0;

    return (
        <div className="centered">
        <h1>Paiement par carte</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Montant total: <strong>{total.toFixed(2)} €</strong>
        </p>
        <Elements stripe={stripePromise}>
            <PaymentForm total={total} />
        </Elements>
        </div>
    );
}

export default StripePayment;
