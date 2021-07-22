import { setToStorage } from 'global/helpers/utils';
import { ADD_PLAYER, REMOVE_PLAYER, SET_MODE, FETCH_GAME } from 'store/action/game';
const initialState = {
  gameMode: '',
  players: [],
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      state = {
        ...state,
        gameMode: action.gameMode,
      };
      break;
    case ADD_PLAYER:
      let hasConflict = false;
      state.players.map(({ name, gender }) => {
        if (name === action.player.name && action.player.gender === gender) {
          hasConflict = true;
        }
      });
      if (hasConflict) {
        break;
      }
      state = {
        ...state,
        players: [
          ...state.players,
          {
            id: state.players.length,
            name: action.player.name,
            gender: action.player.gender,
            score: 0,
          },
        ],
      };
      break;
    case REMOVE_PLAYER:
      let newPlayers = state.players.filter(({ id }) => id !== action.id);
      newPlayers = newPlayers.map((player, index) => (player.id = index));
      state = {
        ...state,
        players: [...newPlayers],
      };
      break;
    case FETCH_GAME:
      state = {
        ...state,
        ...action.game,
      };
      break;
    default:
      return state;
  }

  setToStorage('@game', state);
  return state;
};

export default game;
