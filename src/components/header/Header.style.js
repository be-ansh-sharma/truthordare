import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    height: '20%',
  },
  compact: {
    height: '5%',
  },
  title: {
    backgroundColor: COLOR.accent,
    borderBottomRightRadius: 75,
    height: '100%',
  },
  titleCompact: {
    flexDirection: 'row',
  },
  logoWrapper: {
    flexGrow: 1,
  },
  logoWrapperCompact: {
    flexGrow: 0,
    width: 40,
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
  subTitleTextCompact: {
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  logo: {
    resizeMode: 'contain',
    height: null,
    width: null,
    flex: 1,
    position: 'relative',
    top: '25%',
  },
  logoCompact: {
    top: 0,
  },
  settingWrapper: {
    width: '12%',
  },
  setting: {
    width: 40,
  },
});
