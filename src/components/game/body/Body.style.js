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
    justifyContent: 'space-around',
  },
  carousel: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 6,
  },
  info: {
    flex: 0.5,
  },
  control: {
    flex: 1,
  },
  card: {
    height: '80%',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 14,
    alignContent: 'center',
  },
  divider: {
    width: '80%',
    backgroundColor: COLOR.dark,
    height: 2,
    opacity: 0.5,
  },
  cardInner: {
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: 20,
  },
  header: {
    height: '10%',
    alignSelf: 'center',
    width: '100%',
    paddingLeft: '10%',
    justifyContent: 'center',
  },
  choice: {
    fontSize: 30,
    fontFamily: 'Cartoon',
  },
});
