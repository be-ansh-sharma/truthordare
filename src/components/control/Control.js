import React from 'react';
import { View, Image } from 'react-native';
import styles from './Control.style';
import { COLOR } from 'global/styles';
import Button from 'components/button/Button';
import Icon from 'components/Icons/Icon';

const Control = ({ positiveHandler, negativeHandler, choice }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={negativeHandler}
        raiseLevel={4}
        height={60}
        width={60}
        borderRadius={30}>
        <View style={styles.button}>
          {!choice ? (
            <Image
              style={styles.image}
              source={require('assets/images/devil.png')}
            />
          ) : (
            <Icon
              disabled
              name="close-outline"
              size={40}
              color={COLOR.background}
            />
          )}
        </View>
      </Button>
      <Button
        onPress={positiveHandler}
        raiseLevel={4}
        height={60}
        width={60}
        borderRadius={30}>
        <View style={styles.button}>
          {!choice ? (
            <Image
              style={styles.image}
              source={require('assets/images/angel.png')}
            />
          ) : (
            <Icon
              disabled
              name="checkmark-outline"
              size={40}
              color={COLOR.background}
            />
          )}
        </View>
      </Button>
    </View>
  );
};

export default Control;
