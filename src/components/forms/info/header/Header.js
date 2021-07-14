import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('assets/images/splash.png')}
          />
        </View>
        <View style={styles.subTitleWrapper}>
          <Text style={styles.subTitleText}>Truth or Dare?</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
