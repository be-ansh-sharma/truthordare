import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import { Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import Pressable from 'components/pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const playRef = useRef();
  const navigation = useNavigation();

  const playHandler = () => {
    navigation.navigate('Mode');
  };

  useEffect(() => {
    const timer = setInterval(() => playRef?.current?.play(), 5000);

    () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Pressable onPress={playHandler} style={styles.playWrapper}>
          <LottieView
            ref={playRef}
            style={styles.play}
            loop={false}
            source={require('assets/animations/button.json')}
          />
          <Text style={styles.playText}>Play</Text>
        </Pressable>
        <Pressable style={styles.playWrapper}>
          <LottieView
            ref={null}
            style={styles.play}
            source={require('assets/animations/button.json')}
          />
          <Text style={styles.playText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Body;
