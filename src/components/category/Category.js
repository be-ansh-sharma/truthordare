import React from 'react';
import { View } from 'react-native';
import { categories } from 'global/constants';
import Card from './card/Card';
import styles from './Category.style';

const Category = () => {
  const Cards = categories.map(({ name, value, color }) => (
    <Card key={value} name={name} value={value} color={color} />
  ));

  return <View style={styles.container}>{Cards}</View>;
};

export default Category;
