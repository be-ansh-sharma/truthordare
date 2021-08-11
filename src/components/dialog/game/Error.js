import React from 'react';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { View } from 'react-native';

const NoCard = ({ closeDialogHandler }) => {
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title>CAUTION!</Dialog.Title>
          <Dialog.Content>
            <View>
              <Text>
                Wiping your data will delete all your progres and history.
              </Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>New Game</Button>
            <Button onPress={hideDialog}>LeaderBoard</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default NoCard;
