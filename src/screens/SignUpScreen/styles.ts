import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
  },
  logo: {
    width: 280,
    height: 140,
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
    width: '85%',
    marginBottom: -40,
  },

  button: {
    width: '70%',
    backgroundColor: '#0f2034',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: '#455A64',
    marginLeft: 20,
  },
  loginButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginLeft: 10,
  },
  input: {
    height: 55,
    borderColor: '#B0BEC5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
});

export default styles;
