import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/settings/Body';
import SmartBanner from 'components/Banners/SmartBanner';

const Settings = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Header mode="compact" showBack />
        <Body />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Settings;
