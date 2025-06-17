import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chatsBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    flex: 1,
    marginRight: 10,
  },
  message: {
    fontSize: 14,
    color: '#636e72',
    marginTop: 4,
    marginLeft: 0,
    flex: 1,
  },
  online: {
    color: '#00b894',
    fontSize: 12,
    marginRight: 10,
  },
  offline: {
    color: '#d63031',
    fontSize: 12,
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    color: '#b2bec3',
    marginRight: 10,
  },
  circule: {
    backgroundColor: '#00b894',
    borderRadius: 12,
    height: 20,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  circuleText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  avatar: {
    marginRight: 15,
  },
  noChatsText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#636e72',
    fontSize: 16,
  },
  logo: {
    height: 60,
    width: 120,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  searchIcon: {

    marginRight: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    transform: [{ rotate: '-5deg' }],
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(85, 85, 85, 0.3)',

  }
});

export default styles