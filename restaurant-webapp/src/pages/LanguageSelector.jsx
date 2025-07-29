import { useNavigate } from 'react-router-dom';
import "flag-icons/css/flag-icons.min.css";

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
        <button onClick={() => selectLanguage('fr')}>Français <span class="fi fi-fr"></span> </button>
        <button onClick={() => selectLanguage('nl')}>Nederlands <span class="fi fi-nl"></span></button>
        <button onClick={() => selectLanguage('en')}>English <span class="fi fi-us"></span></button>
      </div>
    </div>
  );
}

export default LanguageSelector;
