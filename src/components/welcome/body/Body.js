import React from 'react';
import { View } from 'react-native';
import styles from './Body.style';
import { useNavigation } from '@react-navigation/native';
import Button from 'components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cleanGame } from 'store/action/game';

const Body = () => {
  const navigation = useNavigation();
  const isGameInProgress = useSelector(
    state => state.information.isGameInProgress,
  );
  const { gameMode, players } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const newGameHandler = () => {
    dispatch(cleanGame());
    navigation.navigate('Mode');
  };

  const continueHandler = () => navigation.navigate('Game');

  const settingHandler = () => navigation.navigate('Settings');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {!!isGameInProgress && !!gameMode.length && !!players.length && (
          <View style={styles.playWrapper}>
            <Button text="CONTINUE" onPress={continueHandler} />
          </View>
        )}
        <View style={styles.playWrapper}>
          <Button text="NEW GAME" onPress={newGameHandler} />
        </View>
        <View style={styles.playWrapper}>
          <Button text="SETTINGS" onPress={settingHandler} />
        </View>
      </View>
    </View>
  );
};

export default Body;
