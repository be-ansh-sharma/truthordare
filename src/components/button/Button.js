import React from 'react';
import { COLOR } from 'global/styles';
import AwesomeButton from 'react-native-really-awesome-button-fixed/src/themes/bojack';
import { Text } from 'react-native-paper';

const Button = ({ onPress, text, width, type, children, disabled }) => {
  return (
    <AwesomeButton
      backgroundColor={COLOR.accent}
      onPress={onPress}
      raiseLevel={10}
      disabled={disabled || false}
      type={type || 'primary'}>
      {children ? (
        children
      ) : (
        <Text
          style={{
            fontSize: 26,
            fontFamily: 'Cartoon',
            textAlign: 'center',
            width: width || '60%',
            height: '100%',
          }}>
          {text}
        </Text>
      )}
    </AwesomeButton>
  );
};

export default Button;
