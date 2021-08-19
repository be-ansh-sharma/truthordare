import { setToStorage } from 'global/helpers/utils';
import {
  FETCH_INFORMATION,
  INITIATE_GAME,
  SET_VERSION_NUMBER,
  UPDATE_ADS_PERSONALIZATIONS,
} from 'store/action/information';
import { CLEAN_GAME } from 'store/action/game';
const initialState = {
  isAdsShown: true,
  isGameInProgress: null,
  versionNumber: null,
  personalizedAds: true,
};

const information = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFORMATION:
      state = {
        ...state,
        ...action.information,
      };
      break;
    case INITIATE_GAME:
      state = {
        ...state,
        isGameInProgress: true,
      };
      break;
    case CLEAN_GAME:
      state = {
        ...state,
        isGameInProgress: null,
      };
      break;
    case SET_VERSION_NUMBER:
      state = {
        ...state,
        versionNumber: action.versionNumber,
      };
      break;
    case UPDATE_ADS_PERSONALIZATIONS:
      state = {
        ...state,
        personalizedAds: !state.personalizedAds,
      };
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  return state;
};

export default information;
