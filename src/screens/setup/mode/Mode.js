import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/mode/body/Body';
import SmartBanner from 'components/Banners/SmartBanner';

const Mode = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Header title="MODES" mode="compact" showBack showSettings />
        <Body />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Mode;
