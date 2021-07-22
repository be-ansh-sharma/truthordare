import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/players/body/Body';

const Players = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <Header title="PLAYERS" mode="compact" showBack showSettings />
      <Body />
    </ScrollView>
  );
};

export default Players;
