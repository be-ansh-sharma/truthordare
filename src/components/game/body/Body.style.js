import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.accent,
    height: '95%',
  },
  inner: {
    backgroundColor: COLOR.dark,
    borderTopLeftRadius: 75,
    height: '100%',
    paddingHorizontal: '2%',
  },
  carousel: {
    flex: 2,
  },
  info: {
    height: '5%',
  },
  control: {
    height: '15%',
  },
});
