import { useNavigate } from 'react-router-dom';

function LanguageSelector() {
  const navigate = useNavigate();
  const selectLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    navigate('/menu');
  };

  return (
    <div className="centered">
      <h1>Select Language</h1>
      <div className="lang-buttons">
        <button onClick={() => selectLanguage('fr')}>Français</button>
        <button onClick={() => selectLanguage('nl')}>Nederlands</button>
        <button onClick={() => selectLanguage('en')}>English</button>
      </div>
    </div>
  );
}

export default LanguageSelector;
