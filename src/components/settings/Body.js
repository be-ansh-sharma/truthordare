import React, { useState } from 'react';
import { View, Linking } from 'react-native';
import styles from './Body.style';
import { List, Text } from 'react-native-paper';
import DialogWorker from 'components/dialog/DialogWorker';
import Pressable from 'components/pressable/Pressable';
import Switch from 'components/switch/Switch';
import { useDispatch } from 'react-redux';
import { updateAds } from 'store/action/information';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import { useNavigation } from '@react-navigation/core';

const Body = () => {
  const [dialog, setDialog] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const openDialog = dialog => setDialog(dialog);
  const closeDialogHandler = () => setDialog(false);
  const switchChangeHandler = () => dispatch(updateAds());

  const feedbackHandler = () => {
    Linking.openURL(
      'mailto:epoch.feedback@gmail.com?subject=Drinking Buddy App Feedback',
    ).catch(err => console.error('An error occurred', err));
  };

  const donationHandler = () => {
    Linking.openURL('https://www.buymeacoffee.com/be.ansh').catch(err =>
      console.error('An error occurred', err),
    );
  };

  const aboutHandler = () => {
    navigation.navigate('Modal', {
      type: 'about',
      title: 'About',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <List.Section>
          <Text style={styles.heading}>SETTINGS</Text>
          <Pressable onPress={null}>
            <List.Item
              title="Show Personalized Ads"
              right={() => <Switch switchChangeHandler={switchChangeHandler} />}
            />
          </Pressable>
          <Pressable onPress={feedbackHandler} android_ripple>
            <List.Item
              title="Feedback"
              right={() => (
                <Icon
                  name="mail-outline"
                  size={20}
                  color={COLOR.primary}
                  style={{ alignSelf: 'center' }}
                  disabled
                />
              )}
            />
          </Pressable>
          <Pressable onPress={donationHandler} android_ripple>
            <List.Item
              title="Help me with a Pizza"
              right={() => (
                <Icon
                  name="pizza-outline"
                  size={20}
                  color={COLOR.primary}
                  disabled
                  style={{ alignSelf: 'center' }}
                />
              )}
            />
          </Pressable>
          <Pressable onPress={aboutHandler} android_ripple>
            <List.Item title="About" />
          </Pressable>
        </List.Section>
        {!!dialog && (
          <DialogWorker Name={dialog} closeDialogHandler={closeDialogHandler} />
        )}
      </View>
    </View>
  );
};

export default Body;
