import "react-native-gesture-handler";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Provider } from "react-redux";
import { Store } from "./src/Screen/Store/Store";

import Login from "./src/Screen/Login/Login";
import Register from "./src/Screen/Register/Register";

import SplashScreen from "react-native-splash-screen";

//import navigation
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
