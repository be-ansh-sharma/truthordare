import { setToStorage } from 'global/helpers/utils';
import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_MODE,
  FETCH_GAME,
  UPDATE_GAME,
  CLEAN_GAME,
  UPDATE_SCORE,
} from 'store/action/game';
const initialState = {
  gameMode: '',
  players: [],
  level: 1,
  completedIds: [],
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
      newPlayers = newPlayers.map((player, index) => {
        player.id = index;
        return player;
      });
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
    case UPDATE_GAME:
      let newArray = [...state.completedIds];
      newArray.push(action.id);
      let newLevel = action.level;
      if (Array.isArray(newLevel) || newLevel == 3 || newLevel != state.level) {
        newLevel = action.level;
      } else {
        newLevel = Math.trunc(newArray.length / 10);
        if (newLevel == 0) {
          newLevel = 1;
        } else if (newLevel >= 2) {
          newLevel = 3;
        } else {
          newLevel = 2;
        }
      }

      state = {
        ...state,
        level: newLevel,
        completedIds: newArray,
      };
      break;
    case CLEAN_GAME:
      state = {
        ...initialState,
      };
      break;
    case UPDATE_SCORE:
      state = {
        ...state,
        players: action.players,
      };
      break;
    default:
      return state;
  }

  setToStorage('@game', state);
  return state;
};

export default game;
