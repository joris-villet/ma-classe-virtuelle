import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonAccessClass = ({ role }) => {
  // console.log('listid', listId)
  return (
    <Link
      className="acces-class fade-in-fwd"
      to={role}
    >
      <h2 className="acces-class-title">Ma Classe !</h2>
    </Link>
  );
};

ButtonAccessClass.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ButtonAccessClass;