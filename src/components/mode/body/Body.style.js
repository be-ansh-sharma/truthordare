import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: COLOR.accent,
  },
  inner: {
    backgroundColor: COLOR.dark,
    borderTopLeftRadius: 75,
    height: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    height: 100,
  },
  playWrapper: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
  },
  playText: {
    position: 'absolute',
    fontSize: 18,
  },
  nextScreen: {
    flex: 1,
  },
});
