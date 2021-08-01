import Pressable from 'components/pressable/Pressable';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import styles from './Category.style';
import { fetchCount } from 'content/ContentHelper';
import LinearGradient from 'react-native-linear-gradient';

const Category = ({ name, value, color, description }) => {
  const [count, setCount] = useState();
  useEffect(() => {
    fetchCount(value).then(result => {
      setCount(result);
    });
  }, [value]);

  return (
    <LinearGradient style={styles.container} colors={color}>
      <Text style={styles.text}>{name}</Text>
      <Divider style={styles.divider} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.count}>
        <Text style={styles.countText}>{count} Cards</Text>
      </View>
    </LinearGradient>
  );
};

export default Category;
