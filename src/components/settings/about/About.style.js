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
    //alignItems: 'center',
  },
  appContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  links: {
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    justifyContent: 'flex-end',
    padding: 16,
  },
  text: {
    color: COLOR.primary,
    marginVertical: 15,
    fontSize: 16,
  },
});
