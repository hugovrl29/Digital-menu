import { useNavigate } from 'react-router-dom';

function LanguageSelector() {
  const navigate = useNavigate();
  const selectLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    navigate('/menu');
  };

  return (
    <div>
      <h1>Select Language</h1>
      <button onClick={() => selectLanguage('fr')}>Français</button>
      <button onClick={() => selectLanguage('nl')}>Nederlands</button>
      <button onClick={() => selectLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSelector;