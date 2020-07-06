import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './styles.scss';

const StudentInfoCard = ({ cardStudent }) => {
  return (
    <div>
      <div className="studentCard-label" style={{ backgroundColor: cardStudent.color_label }}>{cardStudent.title_label}</div>
      <h4>{cardStudent.title}</h4>
      <p className="studentCard-paragraphe">
        {cardStudent.content}
      </p>
      <div>
        <ReactPlayer width="255" height="150" url={cardStudent.video} />
      </div>
      <a className="studentCard-url" target="_blank" href={cardStudent.link}>
        {cardStudent.link}
      </a>
    </div>
  );
};

StudentInfoCard.propTypes = {
  cardStudent: PropTypes.object.isRequired,
};

export default StudentInfoCard;
