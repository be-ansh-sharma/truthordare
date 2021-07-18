import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import { useNavigation } from '@react-navigation/native';
import Button from 'components/button/Button';

const Body = () => {
  const navigation = useNavigation();

  const playHandler = () => {
    navigation.navigate('Mode');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.playWrapper}>
          <Button text="PLAY" onPress={playHandler} />
        </View>
        <View style={styles.playWrapper}>
          <Button text="SETTINGS" onPress={playHandler} />
        </View>
      </View>
    </View>
  );
};

export default Body;
