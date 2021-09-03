import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 8,
    height: '60%',
  },
  player: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    elevation: 14,
    height: 50,
    borderRadius: 7,
  },
  name: {
    flex: 2,
    fontFamily: 'Cartoon',
    fontSize: 28,
    paddingLeft: 12,
  },
  gender: {
    width: '10%',
    fontFamily: 'Cartoon',
    fontSize: 24,
  },
  delete: {
    width: '14%',
  },
});
