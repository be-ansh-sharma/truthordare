export const SET_MODE = 'SET_MODE';

export const setMode = mode => {
  return {
    type: SET_MODE,
    gameMode: mode,
  };
};
