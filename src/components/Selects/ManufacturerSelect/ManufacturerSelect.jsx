import React, { forwardRef, useRef, useState } from 'react';
import './ManufacturerSelect.scss';
import { ChevronDown } from 'lucide-react';
import { useOutsideClick } from '../../../utils/hooks/useOutsideClick';

const ManufacturerSelect = forwardRef(
  ({ options, value, onChange, placeholder }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const pickerRef = useRef(null);

    const handleSelect = (option) => {
      onChange(option);
      setIsOpen(false);
    };

    useOutsideClick(pickerRef, () => setIsOpen(false));

    return (
      <div className='manufacturerSelect' ref={pickerRef}>
        <div
          className={`manufacturerSelect__selected-option ${
            isOpen ? 'manufacturerSelect__selected-option_editing' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {value || placeholder}
          <ChevronDown className='currencySelect__arrow' />
        </div>
        {isOpen && (
          <div className='manufacturerSelect__options'>
            {options.map((option) => (
              <div
                key={option}
                className={`manufacturerSelect__option ${
                  option === value ? 'manufacturerSelect__option_selected' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

ManufacturerSelect.displayName = 'ManufacturerSelect';

export default ManufacturerSelect;
