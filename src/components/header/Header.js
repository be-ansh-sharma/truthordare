import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Header.style';
import Icon from 'components/Icons/Icon';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'components/pressable/Pressable';

const Header = ({ mode, title, showBack, showSettings, showLeaderBoard }) => {
  let modeStyles;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const settingHandler = () => navigation.navigate('Settings');

  const scoreHandler = () => navigation.navigate('Leaderboard');

  if (mode === 'compact') {
    modeStyles = {
      container: [styles.container, styles.compact],
      title: [styles.title, styles.titleCompact],
      logo: [styles.logo, styles.logoCompact],
      logoWrapper: [styles.logoWrapper, styles.logoWrapperCompact],
      subTitleText: [styles.subTitleText, styles.subTitleTextCompact],
    };
  } else {
    modeStyles = {
      container: [styles.container],
      title: [styles.title],
      logo: [styles.logo],
      logoWrapper: [styles.logoWrapper],
      subTitleText: [styles.subTitleText],
    };
  }
  return (
    <View style={modeStyles.container}>
      <View style={modeStyles.title}>
        {showBack && (
          <View>
            <Icon
              onPress={goBack}
              name="chevron-back-outline"
              size={40}
              color="white"
            />
          </View>
        )}
        <View style={modeStyles.logoWrapper}>
          <Image
            style={modeStyles.logo}
            source={require('assets/images/splash.png')}
          />
        </View>
        <View style={styles.subTitleWrapper}>
          <Text style={modeStyles.subTitleText}>{title}</Text>
        </View>
        {showSettings && (
          <Pressable onPress={settingHandler} style={styles.settingWrapper}>
            <Icon name="settings-outline" size={25} color="white" disabled />
          </Pressable>
        )}
        {showLeaderBoard && (
          <Pressable onPress={scoreHandler} style={styles.settingWrapper}>
            <Icon name="trophy-outline" size={25} color="white" disabled />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
