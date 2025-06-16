import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16,
  },
  input: {
    borderRadius: 10,
    fontSize: 16,
    marginHorizontal: 5,

  },
  fullNameText: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom: 8,
    color: "#333",
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2


  },
  searchUserInput: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 25,
  },
  usersBox: {

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    height: 50,

  },
  circleDimention: {
    width: 50, height: 50
  },
  usersName:
    { fontSize: 18, fontWeight: '600', paddingLeft: 5 }



})
export default styles