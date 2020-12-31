import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

const searchBar = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },

});


const categoryListItem = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: deviceSize.height / 5,
    width: deviceSize.width / 2 - 20,
    backgroundColor: "white",
    margin: 10,
    resizeMode: "contain",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
    shadowOpacity:5,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  
});

const mealListItem = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  imageBackground: {
    height: deviceSize.height / 4,
    resizeMode: "contain",
    justifyContent : "flex-end",
    overflow:"hidden",
    margin:10,
    borderRadius:50,
    borderWidth:10,
    borderColor:"#c00000"
  },

  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginBottom:20,
  },
});

const mealDetailsCompStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonYoutube: {
    marginBottom:15,
    padding:15,
    backgroundColor:"#ff1200",
    borderRadius:20,
    alignItems:"center",
  },
  buttonText:{
    color:"white",
    fontSize:18,
  },
  imageBackground: {
    height: deviceSize.height / 3,
    resizeMode: "stretch",
    borderRadius: 10,
    elevation: 10,
    shadowOpacity:5,
    justifyContent:"center"
  },
  mealTitle: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginTop:100,
  },
  title: {
    fontSize:24,
    padding:5,
    fontWeight:"bold",
    marginLeft:15,
    marginVertical:5,
  },
  ingredientText:{
    fontSize:18,
    textAlign:"center",
    padding:5,
    fontStyle:"italic",
  },
  instructionText:{
    margin:15,
    fontSize:16,
    lineHeight:30,
  },
  
});

export { searchBar, categoryListItem, mealListItem, mealDetailsCompStyle };
