import React, { useState } from 'react';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { View } from 'react-native';
import RewardBanner from 'components/Banners/RewardBanner';

const RemoveAdsTemp = ({ closeDialogHandler, title, body }) => {
  const [reward, setReward] = useState(false);
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    setReward(true);
  };

  const rewardHandler = () => {
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={!reward} dismissable={false}>
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
      {!!reward && <RewardBanner rewardHandler={rewardHandler} />}
    </View>
  );
};

export default RemoveAdsTemp;
