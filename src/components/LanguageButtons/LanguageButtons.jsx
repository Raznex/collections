import './LanguageButtons.scss';
import { useStore } from '../../utils/store/store';
const LanguageButtons = () => {
  const { language, setLanguage } = useStore();
  return (
    <div className='language'>
      <button
        className={`language__button-lang ${language === 'rus' ? 'language__button-lang_active' : ''}`}
        onClick={() => setLanguage('rus')}
      >
        ру
      </button>
      <p>/</p>
      <button
        className={`language__button-lang ${language === 'eng' ? 'language__button-lang_active' : ''}`}
        onClick={() => setLanguage('eng')}
      >
        en
      </button>
    </div>
  );
};

export default LanguageButtons;
