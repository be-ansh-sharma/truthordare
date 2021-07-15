import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Body from 'components/welcome/body/Body';
import Header from 'components/header/Header';
import { COLOR } from 'global/styles';

const Welcome = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <StatusBar backgroundColor={COLOR.accent} />
      <Header />
      <Body />
    </ScrollView>
  );
};

export default Welcome;
