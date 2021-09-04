import React from 'react';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { View } from 'react-native';
import { getCurrentDate, showRewardAd } from 'global/helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setRewardTime } from 'store/action/information';

const RemoveAdsTemp = ({ closeDialogHandler, title, body }) => {
  const personalizedAds = useSelector(
    state => state.information.personalizedAds,
  );
  const dispatch = useDispatch();
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    showRewardAd(personalizedAds)
      .then(_adv => {
        _adv.addEventListener('rewarded', () => {
          dispatch(setRewardTime(getCurrentDate()));
          _adv.removeAllListeners();
        });
        _adv.show();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        closeDialogHandler();
      });
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} dismissable={false}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <View>
              <Text>{body}</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>Cancel</Button>
            <Button onPress={hideDialog}>Do It!</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default RemoveAdsTemp;
