import React from 'react';
import { View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import styles from './Card.style';
import LinearGradient from 'react-native-linear-gradient';
import { genderGradient } from 'global/constants';

const Card = ({ gender, name, text }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
      colors={gender === 'M' ? genderGradient.male : genderGradient.female}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.inner}>
        <Text style={text ? [styles.choice, styles.text] : [styles.choice]}>
          {text ? text : 'Truth or Dare?'}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Card;
