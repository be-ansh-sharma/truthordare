import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

const Game = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <Text>asdasd</Text>
    </ScrollView>
  );
};

export default Game;
