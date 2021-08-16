import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/header/Header';

const Leaderboard = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <Header title="LEADERBOARD" mode="compact" showBack showSettings />
    </ScrollView>
  );
};

export default Leaderboard;
