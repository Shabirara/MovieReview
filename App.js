import "react-native-gesture-handler";
import React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Foundation from "react-native-vector-icons/Foundation"
import EvilIcon from "react-native-vector-icons/EvilIcons"
import { Avatar } from "react-native-elements";

import Login from "./src/Screen/Login/Login";
import Register from "./src/Screen/Register/Register";
import Profile from "./src/Screen/Profile/Profile";
import Homepage from "./src/Screen/Homepage/Homepage";
import YourReview from "./src/Screen/Profile/YourReview"
import DetailMovie from "./src/Screen/Homepage/DetailMovie";
import AllReviews from "./src/Screen/Profile/AllReviews";
import Rating from "./src/Screen/Profile/Rating";

import SplashScreen from "react-native-splash-screen";

//import navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ms } from "react-native-size-matters";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="ListMovie">
      <Stack.Screen
        component={Homepage} name="ListMovie" options={{ headerShown: false }} />
      <Stack.Screen
        component={DetailMovie} name="DetailMovie" options={{ headerShown: false }} />
      <Stack.Screen
        component={AllReviews} name="All Reviews" />
    </Stack.Navigator>
  )
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);



  const BottomNav = () => {
    return (
      <BottomTab.Navigator
        initialRouteName="Home">
        <BottomTab.Screen
          headerStyle
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: { height: ms(80) },
            tabBarIcon: () => {
              return <EvilIcon name="comment" size={ms(25)} />
            },
          }}
          component={YourReview}
          name="Your Reviews"
        />
        <BottomTab.Screen
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: { height: ms(80) },
            tabBarIcon: () => {
              return <Foundation name="home" size={ms(25)} />
            }
          }}
          component={HomeStack}
          name="Home"
        />
        <BottomTab.Screen
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: { height: ms(80) },
            tabBarIcon: () => {
              return <Avatar source={{ uri: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" }} rounded size={ms(25)} />
            },

          }}
          component={Profile}
          name="Profile"
        />
      </BottomTab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Homepage"
          component={BottomNav}
        />
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
        <Stack.Screen
          options={{ headerShown: false, tabBarVisible: false }}
          component={DetailMovie}
          name="DetailMovie"
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
