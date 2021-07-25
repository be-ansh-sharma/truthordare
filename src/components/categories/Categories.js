import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { categories } from 'global/constants';
import Category from './category/Category';
import styles from './Categories.style';
import Carousel from 'react-native-snap-carousel';
import { setMode } from 'store/action/game';
import { useDispatch } from 'react-redux';
const windowWidth = Dimensions.get('window').width;

const Categories = () => {
  const carouselRef = useRef();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return <Category key={item.value} {...item} />;
  };

  const snapHandler = index => dispatch(setMode(categories[index].value));

  useEffect(() => {
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
