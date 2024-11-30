import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './CurrencySelect.scss';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick';

const CurrencySelect = forwardRef(
  ({ isEditing, currency, setCurrency }, ref) => {
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

    useOutsideClick(pickerRef, () => setIsOpen(false));

    return (
      <div ref={pickerRef}>
        <div
          className={`currencySelect ${isProfile ? 'currencySelect_profile' : ''}`}
          onClick={() => {
            if (location === '/profile') {
              isEditing && setIsOpen(!isOpen);
            } else {
              setIsOpen(!isOpen);
            }
          }}
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
  }
);

CurrencySelect.displayName = 'CurrencySelect';

export default CurrencySelect;
