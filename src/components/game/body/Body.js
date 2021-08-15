import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Dimensions, Animated, Easing, StyleSheet } from 'react-native';
import styles from './Body.style';
import Card from 'components/game/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import Control from 'components/control/Control';
import Info from 'components/info/Info';
import { fetchTruthORDare } from 'content/ContentHelper';
import { updateCurrentGame } from 'store/action/game';
import DialogWorker from 'components/dialog/DialogWorker';
import { useNavigation } from '@react-navigation/native';
const vw = Dimensions.get('window').width;

const Body = () => {
  const { players, level, gameMode, completedIds } = useSelector(
    state => state.game,
  );
  const [choice, setChoice] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [gameObject, setGameObject] = useState({});
  const enterAnimated = useRef(new Animated.Value(0)).current;
  const exitAnimated = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const controlHandler = control => {
    if (!choice) {
      setChoice(control === 'positive' ? 'truth' : 'dare');
    } else {
      runAnimation(exitAnimated).start(() => {
        if (currentIndex === players.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        // let currentGameObject = gameObject[choice];
        // currentGame.completed[currentGameObject.gender][gameObject.level][
        //   choice
        // ].push(currentGameObject.index);
        // currentGame.level = gameObject.level;
        // dispatch(updateCurrentGame(currentGame));
        if (control === 'positive') {
          // update score async
        }
        runAnimation(enterAnimated).reset();
        setChoice(null);
        setGameObject({});
      });
    }
  };

  const runAnimation = useCallback(value => {
    return Animated.timing(value, {
      toValue: 1,
      duration: 500,
      easing: Easing.in,
      useNativeDriver: true,
    });
  }, []);

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

  const scoreHandler = () => navigation.navigate('LeaderBoard');

  const newGameHandler = () => navigation.popToTop();

  useEffect(() => {
    if (!choice) {
      runAnimation(enterAnimated).start(() =>
        runAnimation(exitAnimated).reset(),
      );
      fetchTruthORDare(
        gameMode,
        players[currentIndex].gender,
        level,
        completedIds,
      )
        .then(result => setGameObject(result))
        .catch(error => {
          if (error.NOCARD) {
            setDialog('NoCard');
          }
          setDialog('General');
        });
    }
  }, [
    choice,
    completedIds,
    currentIndex,
    enterAnimated,
    exitAnimated,
    gameMode,
    level,
    players,
    runAnimation,
  ]);

  return (
    <>
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
      {!!dialog && (
        <DialogWorker
          Name={dialog}
          positiveHandler={newGameHandler}
          negativeHandler={scoreHandler}
        />
      )}
    </>
  );
};

export default Body;
