import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOR.accent,
    borderRadius: 25,
    height: 200,
  },
  heading: {
    textAlign: 'center',
    paddingTop: 8,
  },
});
