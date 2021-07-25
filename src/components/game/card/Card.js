import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Card.style';
import LinearGradient from 'react-native-linear-gradient';
import { genderGradient } from 'global/constants';

const Card = ({ gender, name }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
      colors={gender === 'M' ? genderGradient.male : genderGradient.female}>
      <Text>{name}</Text>
    </LinearGradient>
  );
};

export default Card;
