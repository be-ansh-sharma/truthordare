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
    justifyContent: 'space-evenly',
  },
  awardAimation: {
    height: '25%',
  },
  board: {
    flex: 1,
  },
  boardWrapper: {
    height: '70%',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Cartoon',
    fontSize: 40,
  },
  players: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5,
  },
  name: {
    width: '50%',
  },
});
