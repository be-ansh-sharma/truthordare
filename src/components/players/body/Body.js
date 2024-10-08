import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import Button from 'components/button/Button';
import Input from 'components/form/input/Input';
import { useNavigation } from '@react-navigation/native';
import Output from 'components/form/output/Output';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';

const Body = () => {
  const navigation = useNavigation();
  const { players, gameMode } = useSelector(state => state.game);
  const nextScreen = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Input />
        <Output players={players} />
        {players?.length === 2 &&
          (gameMode === 'CoupleDirty' || gameMode === 'CoupleNormal') && (
            <Text style={styles.text}>This mode allows only 2 players</Text>
          )}
        {players?.length >= 2 && <Button text="PLAY" onPress={nextScreen} />}
      </View>
    </View>
  );
};

export default Body;
