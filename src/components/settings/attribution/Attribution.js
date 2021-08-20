import React from 'react';
import { Linking, ScrollView, View, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Attribution.style';
import Pressable from 'components/pressable/Pressable';
import { COLOR } from 'global/styles';

const Attribution = () => {
  const attributionLinHandler = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <StatusBar backgroundColor={COLOR.dark} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('assets/images/splash.png')}
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.text}>
          This project would not have been successful without the following
          resources.
        </Text>
      </View>
      <View style={styles.list}>
        <Pressable
          style={styles.listitem}
          onPress={() =>
            attributionLinHandler('https://lottiefiles.com/user/313032')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>Trophy Winner (Ronit Paul)</Text> from
            lottiefiles
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          onPress={() =>
            attributionLinHandler('https://lottiefiles.com/zeffchris')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>
              Loading 40 | Paperplane (Jeffrey Christopher)
            </Text>{' '}
            from lottiefiles
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          onPress={() =>
            attributionLinHandler('https://www.flaticon.com/authors/freepik')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>Icon made by Freepik</Text> from
            www.flaticon.com
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Attribution;
