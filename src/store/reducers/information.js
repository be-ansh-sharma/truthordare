import { setToStorage } from 'global/helpers/utils';
import { FETCH_INFORMATION } from 'store/action/information';
const initialState = {
  isAdsShown: true,
  isGameInProgress: null,
};

const information = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFORMATION:
      state = {
        ...state,
        ...action.information,
      };
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  return state;
};

export default information;
