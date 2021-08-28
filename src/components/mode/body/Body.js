import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import Categories from 'components/categories/Categories';
import Button from 'components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { categories, adultCategories } from 'global/constants';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';

const Body = () => {
  const navigation = useNavigation();
  const adultMode = useSelector(state => state.information.adultMode);
  let currentCategories = categories;
  const nextScreen = () => {
    navigation.navigate('Players');
  };
  if (adultMode) {
    currentCategories = [...currentCategories, ...adultCategories];
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Categories categories={currentCategories} />
        <Button text="ADD PLAYERS" onPress={nextScreen} />
      </View>
    </View>
  );
};

export default Body;
