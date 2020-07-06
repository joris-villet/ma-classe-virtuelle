import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './styles.scss';

const StudentCards = ({
  cards,
  toggleModals,
  studentCardsContent,
  // toggleCardColor,
  studentCardClicked,
}) => {
  return (
    <div className="studentCard">
      <div
        // style={cards.id && studentCardClicked ? { backgroundColor: '#059d0fbf' } : { backgroundColor: '#fff' }}
        onClick={() => {
          // toggleCardColor('studentCardClicked');
          studentCardsContent(cards);
          toggleModals('modalOnClickCardStudent');
        }}
      >
        <div className="studentCard-label" style={{ backgroundColor: cards.color_label }}>{cards.title_label}</div>
        <h4 className="studentCard-title-card">{cards.title}</h4>
        <p className="studentCard-paragraphe">
          {cards.content}
        </p>
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

StudentCards.propTypes = {
  cards: PropTypes.object.isRequired,
  studentCardsContent: PropTypes.func.isRequired,
  toggleModals: PropTypes.func.isRequired,
  // toggleCardColor: PropTypes.func.isRequired,
  studentCardClicked: PropTypes.bool.isRequired,
};

export default StudentCards;
