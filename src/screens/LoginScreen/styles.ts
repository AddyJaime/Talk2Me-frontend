import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 120,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    tintColor: '#0f2034',
  },
  lightImage: {
    ...StyleSheet.absoluteFillObject,
    width: '10%',
    height: '10%',
    resizeMode: 'cover',
    tintColor: 'white',
    left: 80,
  },
  lightImageTwo: {
    ...StyleSheet.absoluteFillObject,
    width: '15%',
    height: '15%',
    resizeMode: 'cover',
    tintColor: 'white',
    left: 270,
  },
  form: {
    width: '75%',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '70%',
    backgroundColor: '#0f2034',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 30,
    margin: 20,
  },
  signUpButton: {
    color: '#0f2034',
    fontWeight: 'bold',
    paddingLeft: 5,
    fontSize: 15,
  },
});

export default styles;
