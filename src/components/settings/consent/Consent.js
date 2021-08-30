import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Button from 'components/button/Button';
import styles from './Consent.style';
import { useDispatch } from 'react-redux';
import { updatePersonlization, updateConsent } from 'store/action/information';
import { useNavigation } from '@react-navigation/native';

const Consent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const consentHandler = choice => {
    dispatch(updatePersonlization(choice));
    dispatch(updateConsent());
    navigation.replace('HomeStack');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('assets/images/splash.png')}
          />
        </View>
        <Text style={styles.subheading}>
          Truth or Dare App asks for your consent to use your personal data to:
        </Text>
        <View style={styles.permission}>
          <Text style={styles.item}>
            {
              '\u2022 Personalised ads and content, ad and content measurement, audience insights and product development'
            }
          </Text>
          <Text style={styles.item}>
            {'\u2022 Store and/or access information on a device'}
          </Text>
        </View>
        <View style={styles.permission}>
          <Text style={styles.item}>
            Your personal data will be processed and information from your device
            (cookies, unique identifiers, and other device data) may be stored by,
            accessed by and shared with third party vendors, or used specifically
            by this site or app.
          </Text>
        </View>
        <View style={styles.consentWrapper}>
          <Button
            text="Consent"
            onPress={() => consentHandler(true)}
            textWidth="100%"
          />
        </View>
        <View style={styles.consentWrapper}>
          <Button
            text="Do Not Consent"
            onPress={() => consentHandler(false)}
            textWidth="100%"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Consent;
