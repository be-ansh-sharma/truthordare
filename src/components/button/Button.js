import React from 'react';
import { COLOR } from 'global/styles';
import AwesomeButton from 'react-native-really-awesome-button-fixed/src/themes/bojack';
import { Text } from 'react-native-paper';

const Button = ({
  onPress,
  text,
  textWidth,
  type,
  children,
  disabled,
  raiseLevel,
  height,
  borderRadius,
  width,
}) => {
  return (
    <AwesomeButton
      backgroundColor={COLOR.accent}
      onPress={onPress}
      raiseLevel={raiseLevel || 10}
      borderRadius={borderRadius || 4}
      height={height || 50}
      width={width || null}
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
            width: textWidth || '60%',
          }}>
          {text}
        </Text>
      )}
    </AwesomeButton>
  );
};

export default Button;
