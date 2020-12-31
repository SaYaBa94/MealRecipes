import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

const mealCategory = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize:30,
    textAlign:"center",
    marginVertical:10,
    fontWeight:"bold"
  }
});

const mealListStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize:30,
    textAlign:"center",
    marginVertical:10,
    fontWeight:"bold"
  }
});

const mealDetailsPageStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { main, mealCategory, mealListStyle, mealDetailsPageStyle };
