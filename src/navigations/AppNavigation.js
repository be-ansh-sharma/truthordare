import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Modal from 'screens/modal/Modal';
import Welcome from 'screens/setup/welcome/Welcome';
import Mode from 'screens/setup/mode/Mode';
import Players from 'screens/setup/players/Players';
import Game from 'screens/game/Game';

const Stack = createStackNavigator();

// export const GameNavigation = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Game" component={GameScreen} />
//     </Drawer.Navigator>
//   );
// };

export const HomeNavigationTest = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigation"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={({ route }) => {
          let { title, headerShown } = route?.params;
          return {
            headerShown: headerShown === false ? false : true,
            title: title || 'Truth or Dare',
          };
        }}
      />
    </Stack.Navigator>
  );
};

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Mode" component={Mode} />
      <Stack.Screen name="Players" component={Players} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};
