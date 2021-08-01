import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: COLOR.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 14,
  },
  image: {
    height: 40,
    width: 40,
    //transform: [{ rotateZ: '10deg' }],
  },
});
