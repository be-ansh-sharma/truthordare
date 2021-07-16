import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Card.style';

const Card = ({ name, value, color }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text>{name}</Text>
    </View>
  );
};

export default Card;
