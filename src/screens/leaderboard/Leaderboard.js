import React from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/leaderboard/Body';

const Leaderboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header mode="compact" showBack showSettings />
      <Body />
    </View>
  );
};

export default Leaderboard;
