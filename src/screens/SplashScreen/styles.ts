import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f2034',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
  logo: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    marginTop: -80,
  },
});

export default styles;
