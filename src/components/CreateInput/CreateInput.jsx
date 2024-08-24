import React from 'react';
import PropTypes from 'prop-types';
import './CreateInput.scss';

const CreateInput = React.forwardRef(
  ({ value, onChange, onBlur, name, error, placeholder, location }, ref) => (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      className={`create__input ${error ? 'create__input_errors' : ''} ${location ? 'create__input_location' : ''}`}
      placeholder={placeholder}
    />
  )
);

CreateInput.displayName = 'Input';

CreateInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default CreateInput;
