import React, { useEffect, useRef, useState } from 'react';
import { COLOR } from 'global/styles';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { StatusBar, LogBox } from 'react-native';
import { useDispatch } from 'react-redux';
import { fontConfig } from 'global/constants';
import { GlobalNavigation } from 'navigations/AppNavigation';
import Splash from 'components/splash/Splash';
import { cleanGame, fetchGame } from 'store/action/game';
import { fetchInformation } from 'store/action/information';

LogBox.ignoreLogs(['Reanimated 2', 'Constants', 'ViewPropTypes']);

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: COLOR.accent,
    background: COLOR.dark,
    text: COLOR.background,
  },
};

const App = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const navigationRef = useRef();

  useEffect(() => {
    Promise.all([dispatch(fetchInformation()), dispatch(fetchGame())])
      .then(() => {
        setIsReady(true);
      })
      .catch(() => {
        dispatch(cleanGame());
      });
  }, []);

  if (!isReady) {
    return <Splash />;
  }

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer ref={navigationRef} theme={CombinedDarkTheme}>
        <StatusBar backgroundColor={COLOR.dark} />
        <GlobalNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
