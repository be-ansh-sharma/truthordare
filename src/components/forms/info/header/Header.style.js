import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    height: '20%',
    flex: 1,
  },
  title: {
    backgroundColor: COLOR.accent,
    borderBottomRightRadius: 75,
    height: '100%',
  },
  logoWrapper: {
    flexGrow: 1,
  },
  subTitleWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  logo: {
    resizeMode: 'contain',
    height: null,
    width: null,
    flex: 1,
    position: 'relative',
    top: '25%',
  },
});
