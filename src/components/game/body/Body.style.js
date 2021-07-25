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
    borderWidth: 1,
    borderColor: 'red',
    flex: 2,
  },
  info: {
    height: '10%',
    borderWidth: 1,
    borderColor: 'red',
  },
  control: {
    height: '10%',
    borderWidth: 1,
    borderColor: 'red',
  },
});
