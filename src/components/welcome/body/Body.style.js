import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: COLOR.accent,
  },
  form: {
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
  },
  playText: {
    fontSize: 26,
    fontFamily: 'Cartoon',
    width: '60%',
    textAlign: 'center',
  },
});
