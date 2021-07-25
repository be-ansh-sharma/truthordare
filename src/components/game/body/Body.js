import React, { useRef } from 'react';
import { View, Dimensions } from 'react-native';
import styles from './Body.style';
import Card from 'components/game/card/Card';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;

const Body = () => {
  const carouselRef = useRef();
  const players = useSelector(state => state.game.players);

  const renderItem = ({ item }) => {
    return <Card key={item.value} {...item} />;
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
          />
        </View>
        <View style={styles.info}>
          <Text>Test</Text>
        </View>
        <View style={styles.control}>
          <Text>Test</Text>
        </View>
      </View>
    </View>
  );
};

export default Body;
