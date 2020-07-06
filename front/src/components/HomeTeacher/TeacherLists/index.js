/* eslint-disable import/no-unresolved */
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';

import PropTypes from 'prop-types';
import TeacherCards from 'src/containers/HomeTeacher/TeacherCards';

import './styles.scss';

// const TeacherLists = ({ lists }) => (
const TeacherLists = ({ lists, ButtonAddCards }) => {
  return (
    <div className="teacherLists">
      <h4 className="teacherLists-title">
        <Moment local format="dddd DD MMMM">{lists.list_title}</Moment>
      </h4>
      {/* {if (lists.all_card === null) {

      }} */}

      {lists.all_card !== null && lists.all_card.map((element) => {
        // console.log('TeacherLists', lists.list_id);
        return <TeacherCards cards={element} key={`${element.id}${element}`} />;
      })}

      {ButtonAddCards}
    </div>
  );
};

TeacherLists.propTypes = {
  lists: PropTypes.object.isRequired,
  ButtonAddCards: PropTypes.object.isRequired,
};

export default TeacherLists;
