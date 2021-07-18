import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { name as appName } from './app.json';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import InformationReducer from 'store/reducers/information';
import GameReducer from 'store/reducers/game';

const rootReducer = combineReducers({
  information: InformationReducer,
  game: GameReducer,
});

let store;
if (__DEV__) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );
} else {
  store = createStore(rootReducer, applyMiddleware(ReduxThunk));
}

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
