import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fontConfig } from 'global/constants';
import { SetupNavigation, HomeNavigation } from 'navigations/AppNavigation';

LogBox.ignoreLogs(['Reanimated 2', 'Constants']);

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
  const { isGameInProgress } = useSelector(state => state.information);
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <StatusBar backgroundColor={COLOR.dark} />
        {isGameInProgress ? <HomeNavigation /> : <SetupNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
