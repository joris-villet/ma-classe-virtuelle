/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from 'src/containers/AllForms/LoginForm';
import Inscription from 'src/containers/AllForms/Inscription';
import ButtonAccessClass from 'src/containers/Home/ButtonAccessClass';
import CardStudentForHome from 'src/components/Home/CardStudentForHome';
import CardTeacherForHome from 'src/components/Home/CardTeacherForHome';
import GenericModal from 'src/containers/AllModals/GenericModal';
import InfosInHome from 'src/components/Home/InfosInHome';
import PropTypes from 'prop-types';
import './styles.scss';

// == Import

// == Composant
const HomeMain = ({
  toggleModals,
  connectModal,
  inscriptionModal,
  studentOrTeacher,
  handleLogout,
  logged,
}) => (
  <div className="main">
    <div className="main-button-mobile">
      {!logged && (
      <button
        type="button"
        className="main-container-inscription-button"
        onClick={() => {
          toggleModals('inscriptionModal');
        }}
      >
        Inscription Professeur
      </button>)}
      {logged && (
        <Link
        to="/"
        onClick={() => {
          handleLogout();
        }}
        className="main-container-inscription-button"
      >
        DECONNEXION
      </Link>
      )}
    </div>
    <div className="main-container-card-home">
      {!logged && (
        <button
          className="main-container-card-home-student slide-in-left"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            toggleModals('connectModal');
            // onclick slug change in action request for student log
            studentOrTeacher('student');
          }}
        >
          <CardStudentForHome />
        </button>
      )}
      {!logged && (
      <button
        className="main-container-card-home-teacher slide-in-right"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          toggleModals('connectModal');
          // onclick slug change in action request for teacher log
          studentOrTeacher('teacher');
        }}
      >
        <CardTeacherForHome />
      </button>
      )}
    </div>
    <div className="main-container-button-acces-class">
      {logged && (
        <div className="main-container-acces-class scale-in-center">
          <ButtonAccessClass />
        </div>
      )}
    </div>
    <InfosInHome />
    <div className="main-container-inscription">
      <button
        type="button"
        onClick={() => {
          toggleModals('inscriptionModal');
        }}
        className="main-container-inscription-button"
      >
        Inscription Professeur
      </button>
    </div>
    <GenericModal name="connectModal" toggle={connectModal}><LoginForm /></GenericModal>
    <GenericModal name="inscriptionModal" toggle={inscriptionModal}><Inscription /></GenericModal>
  </div>
);

HomeMain.propTypes = {
  connectModal: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  inscriptionModal: PropTypes.bool.isRequired,
  toggleModals: PropTypes.func.isRequired,
  studentOrTeacher: PropTypes.func.isRequired,
};
// == Export
export default HomeMain;
