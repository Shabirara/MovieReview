import React, { useState } from "react";
import { Text, View, TextInput, styles, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import {moderateScale} from 'react-native-size-matters';

import Tombol from "../../Components/Button";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email === "" && password === "") {
      props.navigation.navigate("HomePage");
    } else {
      Alert.alert("Error", "Username dan Password salah");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
        Dont Have an Account?{" "}
        <Text onPress={() => props.navigation.navigate("Register")}>
          {" "}
          Sign Up
        </Text>
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.viewButton}>
          <Tombol onPress={onLogin} judul="Sign In" />
          {/* <Tombol onPress={() => props.navigation.navigate('BottomTab')} judul="Emergency Button" /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
