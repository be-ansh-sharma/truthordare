import React from 'react';
import { View } from 'react-native';
import styles from './Participant.style';
import { Text } from 'react-native-paper';

const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Number of Players</Text>
    </View>
  );
};

export default Participant;
