import React from 'react';
import { View, StatusBar } from 'react-native';
import Body from 'components/welcome/body/Body';
import Header from 'components/welcome/header/Header';
import { COLOR } from 'global/styles';

const Welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLOR.accent} />
      <Header />
      <Body />
    </View>
  );
};

export default Welcome;
