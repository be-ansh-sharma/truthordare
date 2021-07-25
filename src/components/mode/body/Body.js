import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import Categories from 'components/categories/Categories';
import Button from 'components/button/Button';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const navigation = useNavigation();
  const nextScreen = () => {
    navigation.navigate('Players');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Categories />
        <Button text="ADD PLAYERS" onPress={nextScreen} />
      </View>
    </View>
  );
};

export default Body;
