import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const Info = ({ choice, gender }) => {
  if (!choice.length || !gender.length) {
    return '';
  }

  return (
    <View>
      <Text>
        {choice} {gender}
      </Text>
    </View>
  );
};

export default Info;
