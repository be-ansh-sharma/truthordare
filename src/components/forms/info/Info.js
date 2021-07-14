import React from 'react';
import { View, StatusBar } from 'react-native';
import Header from 'components/forms/info/header/Header';
import Body from 'components/forms/info/body/Body';
import { COLOR } from 'global/styles';

const Info = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLOR.accent} />
      <Header />
      <Body />
    </View>
  );
};

export default Info;
