import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Tombol from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";

//import styling
import styles from "./styles";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(
      postLoginUser({
        email,
        password,
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../Assets/Image/logo.png")}
        style={styles.logo}
      />

      <View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
        />
      </View>
      <Text style={styles.forget}>Forgot Your Password?</Text>
      <Text style={styles.dontHaveAccount}>
        Don't Have an Account?{" "}
        <Text onPress={() => props.navigation.navigate("Register")}>
          {" "}
          Sign Up
        </Text>
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.viewButton}>
          <Tombol onPress={handleLogin} judul="Sign In" />
          {/* <Tombol onPress={() => props.navigation.navigate('BottomTab')} judul="Emergency Button" /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
