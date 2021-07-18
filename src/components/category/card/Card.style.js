import { COLOR } from 'global/styles';
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: 350,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 14,
  },
  text: {
    fontSize: 26,
    marginTop: 8,
    fontFamily: 'Cartoon',
  },
  divider: {
    width: '80%',
    backgroundColor: COLOR.dark,
    height: 2,
    marginTop: 4,
    opacity: 0.5,
  },
  description: {
    width: '80%',
    flex: 2,
    marginTop: 12,
  },
  descriptionText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  count: {
    height: '12%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: '10%',
  },
  countText: {
    fontSize: 16,
  },
});
