import React from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/players/body/Body';
import SmartBanner from 'components/Banners/SmartBanner';

const Players = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header title="PLAYERS" mode="compact" showBack showSettings />
        <Body />
      </View>
      <SmartBanner />
    </>
  );
};

export default Players;
