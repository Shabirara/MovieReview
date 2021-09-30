import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
  Platform,
} from "react-native";

import styles from "../Register/RegisterStyle";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { launchImageLibrary } from "react-native-image-picker";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [profilePicture, setprofilePicture] = useState({});

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

  const onSubmit = () => {
    if (username === "" && email === "" && password === "") {
    } else if (password === email) {
      props.navigation.navigate("HomePage");
    } else {
      Alert.alert("Error", "Password masih salah");
    }
  };

  return (
    <SafeAreaView>
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
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Name"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
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
            <TouchableOpacity onPress={onSubmit} style={styles.mainButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centerPos}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
              style={styles.mainButton}
            >
              <Text style={styles.smallTextButton}>
                {" "}
                Already have an account ? Sign In
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.centerPos}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.smallTextButton}>
                Already have an account ? Sign In
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
