import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '40%',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#0f2034',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
});

export default styles;
