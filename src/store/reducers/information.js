import { setToStorage } from 'global/helpers/utils';
import {
  FETCH_INFORMATION,
  INITIATE_GAME,
  SET_VERSION_NUMBER,
  UPDATE_ADS_PERSONALIZATIONS,
  SET_REWARD_TIME,
  UPDATE_ADULT_MODE,
  UPDATE_CONSENT,
} from 'store/action/information';
import { CLEAN_GAME, UPDATE_ADS } from 'store/action/game';
const initialState = {
  adsRewardTime: null,
  isGameInProgress: null,
  versionNumber: null,
  personalizedAds: true,
  adultMode: true,
  consentProvided: false,
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
        personalizedAds: action.personalizedAds,
      };
      break;
    case SET_REWARD_TIME:
      state = {
        ...state,
        adsRewardTime: action.time,
      };
      break;
    case UPDATE_ADS:
      state = {
        ...state,
        adsRewardTime:
          'adsRewardTime' in action
            ? action.adsRewardTime
            : state.adsRewardTime,
      };
      break;
    case UPDATE_ADULT_MODE:
      state = {
        ...state,
        adultMode: action.mode,
      };
      break;
    case UPDATE_CONSENT:
      state = {
        ...state,
        consentProvided: true,
      };
      break;
    default:
      return state;
  }

  setToStorage('@information', state);
  return state;
};

export default information;
