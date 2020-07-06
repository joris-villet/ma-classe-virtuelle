import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ButtonsWeek = ({ week,
  currentWeek,
  changeWeek,
  studentLogged,
}) => {
  return (
    <div className="button-week">
      <div className={studentLogged === true ? 'container-week-student' : 'container-week'}>
        <button
          type="button"
          className="button-week-previousWeek heartbeat-one"
          onClick={() => {
            console.log('Je veux faire - week');
            changeWeek(week - 1);
          }}
        >
          Semaine précédente
        </button>
      </div>
      <div className={studentLogged === true ? 'container-week-student' : 'container-week'}>
        <button
          type="button"
          className="button-week-currentWeek heartbeat-two"
          onClick={() => {
            console.log('Je veux faire = week');
            changeWeek(currentWeek);
          }}
        >
          Semaine actuelle
        </button>
      </div>
      <div className={studentLogged === true ? 'container-week-student' : 'container-week'}>
        <button
          type="button"
          className="button-week-nextWeek heartbeat-three"
          onClick={() => {
            console.log('Je veux faire + week');
            changeWeek(week + 1);
          }}
        >
          Semaine suivante
        </button>
      </div>
    </div>
  );
};

ButtonsWeek.propTypes = {
  week: PropTypes.number.isRequired,
  currentWeek: PropTypes.number.isRequired,
  changeWeek: PropTypes.func.isRequired,
  studentLogged: PropTypes.bool.isRequired,
};

export default ButtonsWeek;
