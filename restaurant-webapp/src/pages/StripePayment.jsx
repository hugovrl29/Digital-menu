import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

const stripePromise = loadStripe('pk_test_51RsbopCKGfv0pvPW1kBrJIqhbcpLxVwt8FeVXhs9SYSeMQcDcwOcAoBZNtKhKhFZ9gGH4prgTDFRi9i78IgQ6QkQ00oGc42ghw');

function StripePayment() {
  return (
    <div className="centered">
      <h1>Paiement par carte</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default StripePayment;
