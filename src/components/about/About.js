import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/header/Header';

import SmartBanner from 'components/Banners/SmartBanner';

const About = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Header title="Truth or Dare?" />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default About;
