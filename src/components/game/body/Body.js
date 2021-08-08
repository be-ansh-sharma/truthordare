import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Dimensions, Animated, Easing, StyleSheet } from 'react-native';
import styles from './Body.style';
import Card from 'components/game/card/Card';
import { useSelector } from 'react-redux';
import Control from 'components/control/Control';
import Info from 'components/info/Info';
import { fetchTruthORDare } from 'content/ContentHelper';
const vw = Dimensions.get('window').width;

const Body = () => {
  const { players, currentGame, gameMode } = useSelector(state => state.game);
  const [choice, setChoice] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameObject, setGameObject] = useState({});
  const enterAnimated = useRef(new Animated.Value(0)).current;
  const exitAnimated = useRef(new Animated.Value(0)).current;

  const controlHandler = control => {
    if (!choice) {
      setChoice(control);
    } else {
      // did the task
      //snap to next card
      exitAnimation().start(() => {
        if (currentIndex === players.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        enterAnimation().reset();
        setChoice(null);
        setGameObject({});
      });
    }
  };

  const enterAnimation = useCallback(() => {
    return Animated.timing(enterAnimated, {
      toValue: 1,
      duration: 500,
      easing: Easing.in,
      useNativeDriver: true,
    });
  }, [enterAnimated]);

  const exitAnimation = useCallback(() => {
    return Animated.timing(exitAnimated, {
      toValue: 1,
      duration: 500,
      easing: Easing.in,
      useNativeDriver: true,
    });
  }, [exitAnimated]);

  const animation = StyleSheet.create({
    enter: {
      transform: [
        {
          translateX: enterAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [-vw, 0],
          }),
        },
        {
          rotate: enterAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '0deg'],
          }),
        },
      ],
    },
    exit: {
      transform: [
        {
          translateX: exitAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, vw],
          }),
        },
        {
          rotate: exitAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
          }),
        },
      ],
    },
  });

  useEffect(() => {
    if (!choice) {
      enterAnimation().start(() => exitAnimation().reset());
      fetchTruthORDare(
        gameMode,
        players[currentIndex].gender,
        currentGame,
      ).then(result => setGameObject(result));
    }
  }, [
    choice,
    currentGame,
    currentIndex,
    enterAnimation,
    exitAnimation,
    gameMode,
    players,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Animated.View
          style={
            !choice
              ? [styles.carousel, animation.enter]
              : [styles.carousel, animation.exit]
          }>
          <Card
            {...players[currentIndex]}
            text={
              choice && gameObject[choice]?.text?.length
                ? gameObject[choice]?.text
                : null
            }
          />
        </Animated.View>
        <View style={styles.info}>
          {choice && (
            <Info choice={choice} gender={players[currentIndex]?.gender} />
          )}
        </View>
        <View style={styles.control}>
          <Control controlHandler={controlHandler} choice={choice} />
        </View>
      </View>
    </View>
  );
};

export default Body;
