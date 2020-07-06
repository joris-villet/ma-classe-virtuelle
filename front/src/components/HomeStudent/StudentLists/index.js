/* eslint-disable import/no-unresolved */
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';
import PropTypes from 'prop-types';
import StudentCards from 'src/containers/HomeStudent/StudentCards';

import './styles.scss';

// const StudentLists = ({ lists }) => (
const StudentLists = ({ lists }) => (
  <div className="studentLists jello-horizontal">
    <h4 className="studentLists-title">
      <Moment local format="dddd DD MMMM">{lists.list_title}</Moment>
    </h4>
    {lists.all_card && lists.all_card.map((element) => {
      {/* console.log('element', element); */}
      return <StudentCards cards={element} key={`${element.id}${element}`} />;
    })}
  </div>
);

StudentLists.propTypes = {
  lists: PropTypes.object.isRequired,
};

export default StudentLists;
