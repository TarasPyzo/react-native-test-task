import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  userContainer: {
    height: 96,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  userImage: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  userInfo: {
    fontSize: 16,
    paddingLeft: 30,
  },
  endOfList: {
    fontSize: 16,
    height: 60,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
});
