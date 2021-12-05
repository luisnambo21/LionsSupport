import { StyleSheet} from "react-native";

export default global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 15,
    textAlign: "center", 
  },
  
  title2: {
    fontSize: 20,
    textAlign: "center",
  },
   title3: {
      fontSize: 25,
    textAlign: "center", 
  },
   innerText: {
    textAlign: "center",
    color: '#1e90ff',
    lineHeight: 30,
  },
  imagen: {
    marginTop: 0,
    paddingVertical: 3,
    color:"#20232a",
    alignSelf:'center',
    height:550,
    width:300,
    fontWeight: "bold",
    paddingLeft: 10,
  },

    imagen2: {
    marginTop: 4,
    paddingVertical: 5,
    color:"#20232a",
    alignSelf:'center',
    height:100,
    width:100,
    fontWeight: "bold",
    paddingLeft: 10,
  },
    buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 5,
    width: "50%",
    height: 50,
    marginTop: 5,
  },
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fondo: {
    backgroundColor: "black"
  }
});
