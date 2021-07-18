import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { categories } from 'global/constants';
import Card from './card/Card';
import styles from './Category.style';
import Carousel from 'react-native-snap-carousel';
const windowWidth = Dimensions.get('window').width;

const Category = () => {
  const carouselRef = useRef();;

  const renderItem = ({ item, index }) => {
    return <Card key={item.value} {...item} />;
  };

  const snapHandler = index => {
    console.log('aad');
  };

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

export default Category;
