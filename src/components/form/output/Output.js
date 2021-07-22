import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Output.style';
import Icon from 'components/Icons/Icon';
import { useDispatch } from 'react-redux';
import { removePlayer } from 'store/action/game';
import LinearGradient from 'react-native-linear-gradient';
import { genderGradient } from 'global/constants';

const Output = ({ players }) => {
  const dispatch = useDispatch();

  const removeHandler = id => {
    dispatch(removePlayer(id));
  };

  return (
    <View style={styles.container}>
      {players.map(player => {
        return (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            key={player.id}
            style={styles.player}
            colors={
              player.gender === 'M'
                ? genderGradient.male
                : genderGradient.female
            }>
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.gender}>{player.gender}</Text>
            <View style={styles.delete}>
              <Icon
                onPress={() => removeHandler(player.id)}
                name="trash-outline"
                size={30}
                color="white"
              />
            </View>
          </LinearGradient>
        );
      })}
    </View>
  );
};

export default Output;
