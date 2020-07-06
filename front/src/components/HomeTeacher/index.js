/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TeacherLists from 'src/components/HomeTeacher/TeacherLists';

import ButtonAddCards from 'src/containers/HomeTeacher/Buttons/ButtonAddCards';
import ButtonClassInfo from 'src/containers/HomeTeacher/Buttons/ButtonClassInfo';
import ButtonAddClass from 'src/containers/HomeTeacher/Buttons/ButtonAddClass';
import ButtonAddStudent from 'src/containers/HomeTeacher/Buttons/ButtonAddStudent';
import ButtonsWeek from 'src/containers/HomeTeacher/Buttons/ButtonsWeek';
import ClassForm from 'src/containers/AllForms/ClassForm';
import CardForm from 'src/containers/AllForms/CardForm';
import CardUpdate from 'src/containers/AllForms/CardUpdate';
import StudentForm from 'src/containers/AllForms/StudentForm';
import GenericModal from 'src/containers/AllModals/GenericModal';

const HomeTeacher = ({
  addClassModal,
  modalOnClickCardTeacher,
  modalAddCard,
  classId,
  addStudent,
  allUserData,
}) => (
  <div className="homeTeacher">
    <div className="bg_gradient"></div>
    <div className="teacher-buttons-container">
      <ButtonClassInfo />
      <ButtonAddClass />
      <ButtonAddStudent />
    </div>
    <ButtonsWeek />
    <div className="homeTeacher-container-lists">
      {allUserData && allUserData.map((element, index) => {
        console.log('classId dans le Homme teacher', classId)
        return element.class_id === classId && <TeacherLists lists={element} key={element.list_id} ButtonAddCards={<ButtonAddCards indexList={index} classId={element.class_id} listId={element.list_id} />} />;
      })}
    </div>
    <GenericModal name="modalAddCard" toggle={modalAddCard}><div><CardForm /></div></GenericModal>
    <GenericModal name="addClassModal" toggle={addClassModal}><ClassForm /></GenericModal>
    <GenericModal name="addStudent" toggle={addStudent}><StudentForm /></GenericModal>
    <GenericModal name="modalOnClickCardTeacher" toggle={modalOnClickCardTeacher}><CardUpdate /></GenericModal>
  </div>
);

HomeTeacher.propTypes = {
  modalAddCard: PropTypes.bool.isRequired,
  classId: PropTypes.number.isRequired,
  modalOnClickCardTeacher: PropTypes.bool.isRequired,
  addClassModal: PropTypes.bool.isRequired,
  addStudent: PropTypes.bool.isRequired,
  allUserData: PropTypes.array.isRequired,
};
export default HomeTeacher;
