import React from 'react';
import { ScrollView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Body.style';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { genderGradient } from 'global/constants';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/core';

const Body = () => {
  let players = useSelector(state => state.game.players);
  let sortedArray = [...players];
  const navigation = useNavigation();

  sortedArray.sort((el1, el2) => {
    return el1.score < el2.score ? 1 : -1;
  });

  const newGameHandler = () => navigation.popToTop();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.awardAimation}>
          <LottieView
            loop={true}
            style={styles.animation}
            autoPlay={true}
            speed={0.5}
            source={require('assets/animations/award.json')}
          />
        </View>
        <View style={styles.boardWrapper}>
          <Text style={styles.heading}>LEADERBOARD</Text>
          <View style={styles.board}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {sortedArray.map((player, index) => {
                return (
                  <LinearGradient
                    key={player.id}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.players}
                    colors={
                      player.gender === 'M'
                        ? genderGradient.male
                        : genderGradient.female
                    }>
                    <Text>{index + 1}</Text>
                    <Text numberOfLines={1} style={styles.name}>
                      {player.name}
                    </Text>
                    <Text>{player.score} points</Text>
                  </LinearGradient>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Body;
