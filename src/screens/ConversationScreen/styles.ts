import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginVertical: 80,
    marginHorizontal: 30,
    fontSize: 35
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,

  },
  chatsBox: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    // backgroundColor: "#fff",
    marginBottom: -3,
    color: "#333",
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2


  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"

  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: -15,
    marginLeft: -4
  },

  online: {
    color: 'green',
    marginRight: 20,
    marginTop: -20

  }, offline: {
    color: "red",
    marginRight: 20,
    marginBottom: 20
  },
  circule: {
    backgroundColor: 'green',
    borderRadius: 12,
    height: 24,
    minWidth: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    position: 'absolute',
    top: 40,
    left: 300

  }
  , circuleText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",

  },
  logo: {
    height: 70,
    width: 120,
    resizeMode: 'contain',
    marginLeft: 12,
    marginTop: 5
  }

});

export default styles;
