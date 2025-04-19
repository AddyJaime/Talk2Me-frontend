import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginVertical: 80,
    marginHorizontal: 30,
    fontSize: 35
  },
  input: {
    borderWidth: 1,
    borderColor: 'ccc',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: 'fff'

  },
  chatsBox: {
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 2,

  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"

  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },

  online: {
    color: 'green',
    marginRight: 20

  }, offline: {
    color: "red",
    marginRight: 20
  },

});

export default styles;
