import React from 'react';
import { COLOR } from 'global/styles';
import AwesomeButton from 'react-native-really-awesome-button-fixed/src/themes/bojack';
import { Text } from 'react-native-paper';

const Button = ({ onPress, text }) => {
  return (
    <AwesomeButton
      backgroundColor={COLOR.accent}
      onPress={onPress}
      raiseLevel={10}
      type="primary">
      <Text
        style={{
          fontSize: 26,
          fontFamily: 'Cartoon',
          width: '60%',
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </AwesomeButton>
  );
};

export default Button;
