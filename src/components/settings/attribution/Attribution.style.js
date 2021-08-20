import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    resizeMode: 'center',
    width: '100%',
  },
  heading: {
    alignSelf: 'center',
    marginVertical: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
  },
  list: {
    marginTop: 8,
    alignSelf: 'center',
  },
  listitem: {
    marginVertical: '4%',
  },
  hyper: {
    color: COLOR.primary,
    textDecorationLine: 'underline',
  },
  listText: {
    textAlign: 'center',
  },
});
