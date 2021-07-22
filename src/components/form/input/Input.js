import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './Input.style';
import { TextInput, Menu, Button as CustomButton } from 'react-native-paper';
import Button from 'components/button/Button';
import { useDispatch } from 'react-redux';
import { addPlayer } from 'store/action/game';

const Input = () => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [gender, setGender] = useState('M');
  const dispatch = useDispatch();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const genderHandler = data => {
    if (data !== gender) {
      data !== gender && setGender(data);
    }
    setVisible(false);
  };

  const addHandler = () => {
    if (gender && name) {
      dispatch(
        addPlayer({
          name,
          gender,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          label="Player"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<CustomButton onPress={openMenu}>{gender}</CustomButton>}>
        <Menu.Item onPress={() => genderHandler('M')} title="Male" />
        <Menu.Item onPress={() => genderHandler('F')} title="Female" />
      </Menu>
      <View style={styles.add}>
        <Button text="ADD" onPress={addHandler} width="100%" />
      </View>
    </View>
  );
};

export default Input;
