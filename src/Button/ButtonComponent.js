import React from 'react';
import PropTypes from 'prop-types';

export const ButtonComponent = ({ size, label}) => {
  return (
    <button
      type="button"
      className={`btn btn-primary btn-${size}`}>
      {label}
    </button>
  );
};

ButtonComponent.propTypes = {
 
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  label: PropTypes.string,
 
};

ButtonComponent.defaultProps = {
  size: 'lg',
  label: "Button"

};
