import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIcons = props => {
  const {
    name,
    size,
    color,
    style,
    onPress,
    android_disableSound = false,
  } = props;

  const iconPressHanlder = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={iconPressHanlder}
      style={{ ...style }}
      android_disableSound={android_disableSound}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default AppIcons;
