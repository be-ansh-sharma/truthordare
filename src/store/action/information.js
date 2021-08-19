import { getFromStorage } from 'global/helpers/utils';
export const FETCH_INFORMATION = 'FETCH_INFORMATION';
export const UPDATE_SETUP = 'UPDATE_SETUP';
export const INITIATE_GAME = 'INITIATE_GAME';
export const SET_VERSION_NUMBER = 'SET_VERSION_NUMBER';
export const UPDATE_ADS_PERSONALIZATIONS = 'UPDATE_ADS_PERSONALIZATIONS';

export const fetchInformation = () => {
  return async dispatch => {
    try {
      const information = await getFromStorage('@information');
      dispatch({
        type: FETCH_INFORMATION,
        information,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const initiateGame = () => {
  return {
    type: INITIATE_GAME,
  };
};

export const setVersionNumber = versionNumber => {
  return {
    type: SET_VERSION_NUMBER,
    versionNumber,
  };
};

export const updateAds = () => {
  return {
    type: UPDATE_ADS_PERSONALIZATIONS,
  };
};
