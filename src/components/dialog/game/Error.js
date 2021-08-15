import React from 'react';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { View } from 'react-native';

const NoCard = ({ positiveHandler, negativeHandler, title, body }) => {
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
            <Button onPress={negativeHandler}>New Game</Button>
            <Button onPress={positiveHandler}>LeaderBoard</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default NoCard;
