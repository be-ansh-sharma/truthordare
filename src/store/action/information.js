import { getFromStorage } from 'global/helpers/utils';
export const FETCH_INFORMATION = 'FETCH_INFORMATION';
export const UPDATE_SETUP = 'UPDATE_SETUP';
export const INITIATE_GAME = 'INITIATE_GAME';

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
