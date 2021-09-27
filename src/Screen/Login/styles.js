import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    backgroundColor: "black",
    padding: 25,
  },

  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
    top: moderateScale(56),
    left: moderateScale(60),

    backgroundColor: "white",
  },
  logoText: {
    color: "white",
    top: heightPercentageToDP(8),
    left: widthPercentageToDP(33.5),
    fontFamily: "Schoolbell-Regular",
    fontSize: 18,
  },
  forget: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: 15,
    top: heightPercentageToDP(17),
    textAlign: "right",
  },
  dontHaveAccount: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: 15,
    top: heightPercentageToDP(35),
    textAlign: "center",
  },
  email: {
    top: 80,
    left: 20,
    color: "red",
    borderColor: "red",
    borderWidth: 2,
  },
  password: {
    top: 100,
    left: 20,
  },
  input: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: 15,
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    top: 100,
  },

  buttonContainer: {
    marginVertical: 180,
    alignItems: "center",
    fontSize: 18,
  },
});

export default styles;
