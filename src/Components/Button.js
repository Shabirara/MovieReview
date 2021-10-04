import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function Tombol(props) {
  return (
    <Button
      title={props.title}
      titleStyle={styles.textStyle}
      buttonStyle={styles.container}
      containerStyle={styles.shadow}
      onPress={props.onPress}
      disabled={props.disabled}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
  },

  container: {
    backgroundColor: "white",
    borderRadius: widthPercentageToDP(50),
  },

  shadow: {
    elevation: 15,
    width: widthPercentageToDP(50),
    borderRadius: widthPercentageToDP(50),
  },
});
