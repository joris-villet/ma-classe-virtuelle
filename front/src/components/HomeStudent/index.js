/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import StudentLists from 'src/components/HomeStudent/StudentLists';
import StudentInfoCard from 'src/containers/HomeStudent/StudentInfoCard';
import ButtonsWeek from 'src/containers/HomeTeacher/Buttons/ButtonsWeek';
import GenericModal from 'src/containers/AllModals/GenericModal';

const HomeStudent = ({
  modalOnClickCardStudent,
  allUserData,
  classId,
}) => (
  <div className="homeStudent">
    <div className="homeStudent-container-change-week">
        <ButtonsWeek />
      </div>
    <div className="homeStudent-container-lists tracking-in-contract-bck-bottom">
      {allUserData && allUserData.map((element) => {
        return element.class_id === classId && <StudentLists lists={element} key={element.list_id} />;
      })}
      
    </div>
    
    <GenericModal name="modalOnClickCardStudent" toggle={modalOnClickCardStudent}><div><StudentInfoCard /></div></GenericModal>
  </div>
);

HomeStudent.propTypes = {
  modalOnClickCardStudent: PropTypes.bool.isRequired,
  allUserData: PropTypes.array.isRequired,
  classId: PropTypes.number.isRequired,
};
export default HomeStudent;
