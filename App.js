import "react-native-gesture-handler";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Register from "./src/Screen/Register/Register";
import Login from "./src/Screen/Login/Login";

import SplashScreen from "react-native-splash-screen";

//import navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//tambahin lagi stack screenya
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    borderRadius: 10,
  },
});
export default App;
