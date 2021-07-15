import React, { useEffect, useRef } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Header.style';
import Icon from 'components/Icons/Icon';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'components/pressable/Pressable';
import LottieView from 'lottie-react-native';

const Header = ({ mode, title, showBack, showSettings }) => {
  let modeStyles;
  const navigation = useNavigation();
  const settingRef = useRef();

  const goBack = () => navigation.goBack();

  const settingHandler = () => {
    console.log('asd');
  };

  useEffect(() => {
    const timer = setInterval(() => settingRef?.current?.play(), 5000);

    () => clearInterval(timer);
  }, []);

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
          <Text style={modeStyles.subTitleText}>
            {title || 'Truth or Dare?'}
          </Text>
        </View>
        {showSettings && (
          <Pressable onPress={settingHandler} style={styles.settingWrapper}>
            <LottieView
              ref={settingRef}
              style={styles.setting}
              loop={false}
              source={require('assets/animations/setting.json')}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
