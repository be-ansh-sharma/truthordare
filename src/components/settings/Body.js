import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import { List, Text } from 'react-native-paper';
import DialogWorker from 'components/dialog/DialogWorker';
import Pressable from 'components/pressable/Pressable';

const Body = () => {
  const [dialog, setDialog] = useState(false);

  const openDialog = dialog => setDialog(dialog);
  const closeDialogHandler = () => setDialog(false);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <List.Section>
          <Text style={styles.heading}>SETTINGS</Text>
          <Pressable onPress={null}>
            <List.Item
              title="Reminder Mode"
              right={() => <Text style={styles.text}>ss</Text>}
            />
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
