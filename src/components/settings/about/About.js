import React from 'react';
import { ScrollView, Image, View, Linking } from 'react-native';
import Header from 'components/header/Header';
import { Text } from 'react-native-paper';
import Pressable from 'components/pressable/Pressable';
import styles from './About.style';
import SmartBanner from 'components/Banners/SmartBanner';
import { useNavigation } from '@react-navigation/core';
import VersionCheck from 'react-native-version-check';

const About = () => {
  const navigation = useNavigation();
  const privacyPolicyHandler = () => {
    navigation.push('Modal', {
      type: 'privacy',
      title: 'Privacy Policy',
    });
  };

  const attributionsHandler = () => {
    navigation.push('Modal', {
      type: 'attribution',
      title: 'Attributions',
    });
  };

  const rateUsHandler = () => {
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.epoch.truthordare',
    ).catch(err => console.error('An error occurred', err));
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Header title="Truth or Dare?" />
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.appContainer}>
              <Text>Truth or Dare App</Text>
              <Text>{VersionCheck.getCurrentVersion()}</Text>
            </View>
            <View style={styles.linkContainer}>
              <View style={styles.links}>
                <Pressable onPress={privacyPolicyHandler}>
                  <Text style={styles.text}>Privacy Policy</Text>
                </Pressable>
                <Pressable onPress={attributionsHandler}>
                  <Text style={styles.text}>Attributions</Text>
                </Pressable>
                <Pressable onPress={rateUsHandler}>
                  <Text style={styles.text}>Rate Us</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default About;
