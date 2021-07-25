import React from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/game/body/Body';

const Players = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="" mode="compact" showBack showSettings />
      <Body />
    </View>
  );
};

export default Players;
