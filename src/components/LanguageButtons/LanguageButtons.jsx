import './LanguageButtons.scss';
const LanguageButtons = () => {
  return (
    <div className='language'>
      <button className='language__button-lang language__button-lang_active'>
        ru
      </button>
      <p>/</p>
      <button className='language__button-lang'>en</button>
    </div>
  );
};

export default LanguageButtons;
