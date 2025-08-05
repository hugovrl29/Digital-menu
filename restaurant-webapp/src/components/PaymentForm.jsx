import {
  CardElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: 'BE',
      currency: 'eur',
      total: {
        label: 'Total',
        amount: 0.01,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
        setCanMakePayment(true);
      }
    });

    pr.on('paymentmethod', async (e) => {
      setMessage(`Paiement par Apple Pay / Google Pay accepté : ${e.paymentMethod.id}`);
      e.complete('success');
    });

  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      navigate('/thank-you');
    }

    setLoading(false);
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      {canMakePayment && (
        <div style={{ marginBottom: '1rem' }}>
          <PaymentRequestButtonElement
            options={{ paymentRequest }}
            style={{
              paymentRequestButton: {
                type: 'default',
                theme: 'dark',
                height: '50px',
              },
            }}
          />
          <div style={{ textAlign: 'center', margin: '1rem 0', color: '#666' }}>ou</div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '18px',
                color: '#424770',
                '::placeholder': { color: '#aab7c4' },
              },
              invalid: { color: '#9e2146' },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            marginTop: '20px',
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to bottom, #89c46c, #4CAF50)',
            border: 'none',
            color: 'white',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Traitement...' : 'Payer par carte'}
        </button>
      </form>

      {message && <div style={{ marginTop: '1rem', color: 'green' }}>{message}</div>}
    </div>
  );
}

export default PaymentForm;
