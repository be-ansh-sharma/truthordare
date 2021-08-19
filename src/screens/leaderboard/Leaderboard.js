import React from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/leaderboard/Body';
import SmartBanner from 'components/Banners/SmartBanner';

const Leaderboard = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header mode="compact" showBack showSettings />
        <Body />
      </View>
      <SmartBanner />
    </>
  );
};

export default Leaderboard;
