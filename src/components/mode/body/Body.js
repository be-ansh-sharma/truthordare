import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import Category from 'components/category/Category';
import Button from 'components/button/Button';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const navigation = useNavigation();
  const nextScreen = () => {
    console.log('asd');
    navigation.navigate('Players');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Category />
        <Button text="ADD PLAYERS" onPress={nextScreen} />
      </View>
    </View>
  );
};

export default Body;
