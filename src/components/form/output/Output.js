import React from 'react';
import { FlatList, View } from 'react-native';
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

  const PlayerRender = ({ item }) => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        key={item.id}
        style={styles.player}
        colors={
          item.gender === 'M' ? genderGradient.male : genderGradient.female
        }>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.gender}</Text>
        <View style={styles.delete}>
          <Icon
            onPress={() => removeHandler(item.id)}
            name="trash-outline"
            size={30}
            color="white"
          />
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={PlayerRender}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Output;
