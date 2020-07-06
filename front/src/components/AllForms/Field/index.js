// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  fieldClassName,
  placeholder,
  onChange,
  minLengthWord,
  maxLengthWord,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="field">
      <input
        // React - state
        value={value}
        // required="required"
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className={fieldClassName}
        placeholder={placeholder}
        name={name}
        minLength={minLengthWord}
        maxLength={maxLengthWord}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  fieldClassName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minLengthWord: PropTypes.string,
  maxLengthWord: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  minLengthWord: '0',
  maxLengthWord: '100',
};

// == Export
export default Field;
