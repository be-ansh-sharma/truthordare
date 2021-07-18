import { setToStorage } from 'global/helpers/utils';
import { SET_MODE } from 'store/action/game';
const initialState = {
  gameMode: '',
  noOfPlayers: '',
  players: {},
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      state = {
        ...state,
        gameMode: action.gameMode,
      };
      break;
    default:
      return state;
  }

  setToStorage('@game', state);
  return state;
};

export default game;
