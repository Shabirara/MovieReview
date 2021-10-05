import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import { ms } from "react-native-size-matters";

const Profile = (props) => {
  return (
    <View style={styles.fullScreen}>
      <Avatar
        containerStyle={{ marginTop: ms(20), marginBottom: ms(52) }}
        size={"xlarge"}
        rounded
        source={{
          uri: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
        }}
      >
        <Avatar.Accessory style={styles.avatarIcon} size={40} />
      </Avatar>
      <Input
        placeholder="Fullname"
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
      />
      <Input
        placeholder="Username"
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
      />
      <Input
        placeholder="Email"
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
      />
      <Button
        title="LOGOUT"
        buttonStyle={{
          backgroundColor: "white",
          width: ms(120),
          borderColor: "white",
          borderRadius: ms(22),
          height: ms(48),
        }}
        containerStyle={{
          alignItems: "center",
          marginVertical: ms(40),
        }}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: "black",
    flex: ms(1),
    paddingHorizontal: ms(20),
    alignItems: "center",
  },
  avatarIcon: {
    backgroundColor: "#FDC600",
  },
});

export default Profile;
