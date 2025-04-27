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
    marginHorizontal: 20,
    backgroundColor: "white",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    // oscuro o claro
    shadowOpacity: 0.3,
    // como la sombra va de arriba hacia bajo o de la derecha izquierda
    shadowOffset: { width: 0, height: 2 },
    // dura o suave
    shadowRadius: 5


  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"

  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
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

  }

});

export default styles;
