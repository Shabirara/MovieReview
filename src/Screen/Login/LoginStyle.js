import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: ms(0),
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    backgroundColor: "black",
    padding: ms(25),
  },

  logo: {
    width: ms(200),
    height: ms(200),
    top: ms(56),
    left: ms(60),
    backgroundColor: "black",
  },
  logoText: {
    color: "white",
    top: heightPercentageToDP(8),
    left: widthPercentageToDP(33.5),
    fontFamily: "Schoolbell-Regular",
    fontSize: ms(18),
  },
  forgot: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: ms(15),
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
    top: ms(80),
    left: ms(20),
    color: "red",
    borderColor: "red",
    borderWidth: ms(2),
  },
  password: {
    top: ms(100),
    left: ms(20),
  },
  input: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontSize: ms(15),
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: ms(1),
    top: ms(100),
  },

  buttonContainer: {
    marginVertical: 180,
    alignItems: "center",
    fontSize: 18,
  },
});

export default styles;
