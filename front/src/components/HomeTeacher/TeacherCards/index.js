/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './styles.scss';
import { splitTextarea } from 'src/selectors';

const TeacherCards = ({ cards, toggleModals, cardInfos }) => {
  const arrayContent = splitTextarea(cards.content);
  const para = arrayContent.map((elem, index) => {
    return <p key={index}>{elem}</p>;
  });
  return (
    <div className="teacherCard">
      <div
        onClick={() => {
          console.log('cards', cards);
          cardInfos(cards);
          toggleModals('modalOnClickCardTeacher');
        }}
      >
        <div className="teacherCard-label" style={{ backgroundColor: cards.color_label }}>{cards.title_label}</div>
        <h4 className="teacherCard-title-card">{cards.title}</h4>
        <div className="teacherCard-paragraphe">
          {para}
        </div>
      </div>
      <div>
        <ReactPlayer width="255" height="110" url={cards.video} />
      </div>
      <a className="studentCard-url" target="_blank" href={cards.link}>
        {cards.link}
      </a>
    </div>
  );
};

TeacherCards.propTypes = {
  cards: PropTypes.object.isRequired,
  toggleModals: PropTypes.func.isRequired,
  cardInfos: PropTypes.func.isRequired,
};

export default TeacherCards;
