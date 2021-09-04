import React, { useEffect, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import Category from './category/Category';
import styles from './Categories.style';
import Carousel from 'react-native-snap-carousel';
import { cleanGame, setMode } from 'store/action/game';
import { useDispatch, useSelector } from 'react-redux';
const windowWidth = Dimensions.get('window').width;

const Categories = ({ categories }) => {
  const carouselRef = useRef();
  const dispatch = useDispatch();
  const isGameInProgress = useSelector(
    state => state.information.isGameInProgress,
  );

  const renderItem = ({ item }) => {
    return <Category key={item.value} {...item} />;
  };

  const snapHandler = index => {
    if (isGameInProgress) {
      dispatch(cleanGame());
    }
    dispatch(setMode(categories[index].value));
  };

  useEffect(() => {
    if (isGameInProgress) {
      dispatch(cleanGame());
    }
    dispatch(setMode(categories[0].value));
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={categories}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - (25 / 100) * windowWidth}
        loop={true}
        onSnapToItem={snapHandler}
      />
    </View>
  );
};

export default Categories;
