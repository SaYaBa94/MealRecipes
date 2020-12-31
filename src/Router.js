import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { MealCategory, MealList, Details, YoutubeWebView } from './pages';



function Router() {

  
const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MealCategory" component={MealCategory} />
        <Stack.Screen name="MealList" component={MealList} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="YoutubeWebView" component={YoutubeWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
