import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import styles from './Body.style';
import Card from 'components/game/card/Card';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import Control from 'components/control/Control';
import Info from 'components/info/Info';
const windowWidth = Dimensions.get('window').width;

const Body = () => {
  const carouselRef = useRef();
  const players = useSelector(state => state.game.players);
  const [choice, setChoice] = useState();
  const [text, setText] = useState();

  const renderItem = ({ item }) => {
    return <Card key={item.value} {...item} />;
  };

  const positiveHandler = () => {
    console.log(carouselRef.current.currentIndex);
    if (!choice) {
      setChoice('truth');
    } else {
      // did the task
      carouselRef?.current?.snapToNext();
      setChoice(null);
    }
  };

  const negativeHandler = () => {
    if (!choice) {
      setChoice('dare');
    } else {
      // failed to do the task
      carouselRef?.current?.snapToNext();
      setChoice(null);
    }
  };

  const snapHandler = index => {
    console.log(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.carousel}>
          <Carousel
            layout={'stack'}
            contentContainerCustomStyle={{ alignItems: 'center' }}
            ref={carouselRef}
            scrollEnabled={false}
            data={players}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - (25 / 100) * windowWidth}
            loop={true}
            onSnapToItem={index => snapHandler()}
          />
        </View>
        <View style={styles.info}>
          {choice && (
            <Info
              choice={choice}
              gender={players[carouselRef?.current?.currentIndex]?.gender}
            />
          )}
        </View>
        <View style={styles.control}>
          <Control
            positiveHandler={positiveHandler}
            negativeHandler={negativeHandler}
            choice={choice}
          />
        </View>
      </View>
    </View>
  );
};

export default Body;
