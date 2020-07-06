import {
  CHOOSE_LABEL,
} from 'src/actions/labelUpdate';

export const initialState = {
  chooseLabel: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHOOSE_LABEL:
      return {
        ...state,
        chooseLabel: action.valueLabel,
      };

    default:
      return state;
  }
};

export default reducer;
