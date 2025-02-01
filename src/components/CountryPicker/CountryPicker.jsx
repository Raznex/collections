import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './CountryPicker.scss';
import { useStore } from '../../utils/store/store';

const CountryPicker = ({ isEditing }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const pickerRef = useRef(null);
  const { language } = useStore();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const countryNames = countries.map((country) => country.name.common).sort();
  return (
    <div ref={pickerRef}>
      <div
        className={`countrySelect ${isEditing ? 'countrySelect' : 'countrySelect_disabled'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`countrySelect__selected-option ${isEditing ? 'countrySelect__selected-option' : 'countrySelect__selected-option_disabled'}`}
        >
          {selectedCountry || 'Select a country'}{' '}
          <ChevronDown
            className={`${isEditing ? 'countrySelect__arrow' : 'countrySelect__arrow_disabled'}`}
          />
        </div>
        {isOpen && (
          <div className='countrySelect__options'>
            {countryNames.map((country) => (
              <div
                key={country}
                className={`countrySelect__option ${country === selectedCountry ? 'countrySelect__option_selected' : ''}`}
                onClick={() => handleSelect(country)}
              >
                {country}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryPicker;
