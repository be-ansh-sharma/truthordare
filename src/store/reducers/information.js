import { setToStorage } from 'global/helpers/utils';
const initialState = {
  isAdsShown: true,
  isGameInProgress: null,
};

const information = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      state = state;
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  return state;
};

export default information;
