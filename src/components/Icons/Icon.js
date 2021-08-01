import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIcons = props => {
  const {
    name,
    size,
    color,
    style,
    onPress,
    android_disableSound = false,
    disabled = false,
  } = props;

  const iconPressHanlder = () => {
    if (onPress) {
      onPress();
    }
  };

  let CMP = Pressable;
  if (disabled) {
    CMP = View;
  }

  return (
    <>
      {disabled ? (
        <View style={{ ...style }}>
          <Icon name={name} size={size} color={color} />
        </View>
      ) : (
        <Pressable
          onPress={iconPressHanlder}
          style={{ ...style }}
          android_disableSound={android_disableSound}>
          <Icon name={name} size={size} color={color} />
        </Pressable>
      )}
    </>
  );
};

export default AppIcons;
