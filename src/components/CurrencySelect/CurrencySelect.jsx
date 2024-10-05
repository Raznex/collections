import React, { useEffect, useRef, useState } from 'react';
import './CurrencySelect.scss';
import { ChevronDown } from 'lucide-react';

const CurrencySelect = ({ isEditing, currency, setCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const pickerRef = useRef(null);
  const currencies = [
    { value: 'RUB', label: '₽' },
    { value: 'EUR', label: '€' },
    { value: 'USD', label: '$' },
  ];
  const location = window.location.pathname;
  useEffect(() => {
    if (location === '/profile') {
      setIsProfile(true);
    }
  }, []);
  const handleSelect = (value) => {
    setCurrency(value);
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

  return (
    <div ref={pickerRef}>
      <div
        className={`currencySelect ${isProfile ? 'currencySelect_profile' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`currencySelect__selected-option ${isEditing ? 'currencySelect__selected-option_editing' : ''}`}
        >
          {
            currencies.find((curr) => {
              return curr.value === currency;
            })?.label
          }
          <ChevronDown className='currencySelect__arrow' />
        </div>
        {isOpen && (
          <div
            className={`currencySelect__options ${isEditing ? 'currencySelect__options_editing' : ''}`}
          >
            {currencies.map((curr) => (
              <div
                key={curr.value}
                className={`currencySelect__option ${curr.value === currency ? 'currencySelect__option_selected' : ''}`}
                onClick={() => handleSelect(curr.value)}
              >
                {curr.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencySelect;
