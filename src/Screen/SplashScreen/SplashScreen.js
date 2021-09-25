import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../Assets/Images/moviereviewikon.png")} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontFamily: "Schoolbell-Regular",
    fontSize: 18,
    textAlign: "center",
  },
});
