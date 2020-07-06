/* eslint-disable import/no-unresolved */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './styles.scss';

const GenericModal = ({ 
  // need this props
  toggle,
  name,
  children,
  // container props
  toggleModals,
}) => {
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(2px)',
    },
    content: {
      top: '50%',
      left: '50%',
      width: '400px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px 20px',
    },
  };
  return (
    <Modal
      style={customStyles}
      isOpen={toggle}
      onRequestClose={() => {
        toggleModals(name);
      }}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

GenericModal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  toggleModals: PropTypes.func.isRequired,
};

export default GenericModal;
