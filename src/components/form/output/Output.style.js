import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  player: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 8,
    alignItems: 'center',
    elevation: 14,
  },
  name: {
    flex: 2,
    fontFamily: 'Cartoon',
    fontSize: 28,
    paddingLeft: 12,
  },
  gender: {
    width: '8%',
    fontFamily: 'Cartoon',
    fontSize: 24,
  },
  delete: {
    width: '14%',
  },
});
