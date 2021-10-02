import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Tombol from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./Redux/AuthAction";

//import styling
import styles from "./LoginStyle";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = () => {
    if (email === "" && password == "") {
      props.navigation.navigate("Register");
    } else {
      Alert.alert("Eror", "Email dan Password Salah");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../Assets/Image/logo.png")}
        style={styles.logo}
      />
      {/* {input email} */}
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
        {/* {input passsword} */}
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
        />
      </View>
      <Text style={styles.forgot}>Forgot Your Password?</Text>
      <Text style={styles.dontHaveAccount}>
        Don't Have an Account?{" "}
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
