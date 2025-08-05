import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import waitressIcon from '../assets/waitress-svgrepo-com.svg';

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="centered">
      <h1>Merci pour votre commande !</h1>
      <img src={waitressIcon} style={{width: '150px', margin: '1rem 0'}}></img>
      <p>Votre commande est en cours de préparation.</p>
    </div>
  );
}

export default ThankYou;
