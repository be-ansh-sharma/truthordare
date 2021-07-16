import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import Category from 'components/category/Category';

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Category />
      </View>
    </View>
  );
};

export default Body;
