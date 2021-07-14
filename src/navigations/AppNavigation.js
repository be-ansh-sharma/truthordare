import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from 'screens/game/Game';
import Modal from 'screens/modal/Modal';
import Setup from 'screens/setup/Setup';

const Stack = createStackNavigator();

// export const GameNavigation = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Game" component={GameScreen} />
//     </Drawer.Navigator>
//   );
// };

export const HomeNavigation = () => {
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

export const SetupNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SetupNavigation" component={Setup} />
    </Stack.Navigator>
  );
};
