import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import styles from "../Register/RegisterStyle";
import { Avatar } from "react-native-elements";

import { launchImageLibrary } from "react-native-image-picker";
import { moderateScale } from "react-native-size-matters";

function Register(props) {
  // console.log("props", props);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [profilePicture, setprofilePicture] = useState({});
  const [message, setMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePhoto = () => {
    launchImageLibrary({ maxHeight: 300, maxWidth: 300 }, (res) => {
      if (res.didCancel) {
        return;
      } else {
        const img = {
          ...res.assets[0],
        };
        setprofilePicture();
      }
    });
  };

  const onSignUp = async () => {
    try {
      const result = await axios.post(
        "https://movieapp-glints.herokuapp.com/api/v1/users/signup",
        { email, password, fullName }
      );
      console.log(result, "result signup");
      if (result.status === 200) {
        props.navigation.navigate("Login");
      } else {
        Alert.alert("signup failed");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.window}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <View style={styles.photoView}>
              <Avatar
                rounded
                source={{
                  uri: profilePicture ? profilePicture.uri : "",
                }}
                size={moderateScale(120)}
              >
                <Avatar.Accessory
                  style={styles.accStyle}
                  color="white"
                  size={moderateScale(20)}
                  onPress={changePhoto}
                />
              </Avatar>
            </View>
          </View>
          <Text style={styles.warnText}>{message}</Text>

          <TextInput
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Fullname"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
            secureTextEntry
          />
          <View style={styles.centerPos}>
            <TouchableOpacity onPress={onSignUp} style={styles.mainButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centerPos}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.smallTextButton}>
                {" "}
                Already have an account ? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Register;
