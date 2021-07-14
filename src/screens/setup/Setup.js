import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Info from 'components/forms/info/Info';

const Setup = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <Info />
    </ScrollView>
  );
};

export default Setup;
