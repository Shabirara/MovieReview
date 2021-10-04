import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

import Button from "../../Components/Button";
import { setTokenToLoginReducer } from "./Redux/action/actionLogins";

import { useDispatch, useSelector } from "react-redux";

//import styling
import styles from "./LoginStyle";

export default function Login(props) {
  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [message, setMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      const result = await axios.post(
        "https://movieapp-glints.herokuapp.com/api/v1/users/signin",
        { email, password }
      );
      if (result.status === 200) {
        dispatch(setTokenToLoginReducer(result.data.data));
        props.navigation.navigate("Home");
      } else {
        Alert.alert("Login Failed");
      }
    } catch (error) {
      console.log(error, "Login error");
      console.log(result, "result token");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../Assets/Image/logo.png")}
        style={styles.logo}
      />
      {/* {input email} */}
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
      </View>
      <View>
        {/* {input passsword} */}
        <TextInput
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
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
          <Button onPress={onLogin} title="SIGN IN" />

          {/* <Tombol onPress={() => props.navigation.navigate('BottomTab')} judul="Emergency Button" /> */}
        </View>
      </View>
    </View>
  );
}
