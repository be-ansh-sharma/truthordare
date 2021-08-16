import { getFromStorage } from 'global/helpers/utils';
export const SET_MODE = 'SET_MODE';
export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const FETCH_GAME = 'FETCH_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const CLEAN_GAME = 'CLEAN_GAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const setMode = mode => {
  return {
    type: SET_MODE,
    gameMode: mode,
  };
};

export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    player,
  };
};

export const removePlayer = id => {
  return {
    type: REMOVE_PLAYER,
    id,
  };
};

export const updateGame = params => {
  return {
    type: UPDATE_GAME,
    level: params.level,
    id: params.id,
  };
};

export const fetchGame = () => {
  return async dispatch => {
    try {
      const game = await getFromStorage('@game');
      dispatch({
        type: FETCH_GAME,
        game,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const cleanGame = () => {
  return {
    type: CLEAN_GAME,
  };
};

export const updateScore = (index, choice, passed) => {
  return async (dispatch, getState) => {
    let { players } = getState().game;
    if (passed) {
      players[index].score += choice === 'truth' ? 1 : 2;
    } else {
      players[index].score -= choice === 'truth' ? 1 : 2;
    }
    dispatch({
      type: UPDATE_SCORE,
      players,
    });
  };
};
