import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const InputLogin = React.forwardRef(
  ({ value, onChange, onBlur, name, error, placeholder }, ref) => (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      className={`input ${error ? 'input_errors' : ''}`}
      placeholder={placeholder}
    />
  )
);

InputLogin.displayName = 'Input';

InputLogin.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default InputLogin;
