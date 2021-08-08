import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    alignContent: 'center',
    height: '80%',
    elevation: 14,
    //paddingHorizontal: '7%',
    marginHorizontal: '6%',
  },
  divider: {
    width: '80%',
    backgroundColor: COLOR.dark,
    height: 2,
    opacity: 0.5,
  },
  inner: {
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
