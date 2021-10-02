import { StyleSheet, Dimensions } from "react-native";
import { ms } from "react-native-size-matters";

const contWidth = Dimensions.get("window").width * 0.9;
const contHeight = Dimensions.get("window").height;
const posHeight = Dimensions.get("window").height * 0.05;

export default StyleSheet.create({
  window: {
    backgroundColor: "black",
    alignItems: "center",
    height: contHeight,
  },
  container: {
    width: contWidth,
  },
  contLogo: {
    alignItems: "center",
    paddingTop: ms(10),
  },
  logo: {
    width: ms(100),
    height: ms(100),
  },
  contInput: {
    position: "relative",
    top: posHeight,
  },
  warnText: {
    color: "#9e2a2b",
    padding: ms(10),
    fontSize: ms(10),
  },
  formInput: {
    backgroundColor: "transparent",
    borderRadius: ms(10),
    padding: ms(10),
    marginBottom: ms(10),
    color: "#fff",
    borderBottomWidth: ms(1),
    borderBottomColor: "white",
  },
  centerPos: {
    alignItems: "center",
    margin: ms(10),
  },
  mainButton: {
    padding: ms(10),
    backgroundColor: "red",
    width: ms(200),
    height: ms(50),
    borderRadius: ms(50),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: ms(20),
  },

  smallTextButton: {
    color: "orange",
    fontSize: ms(15),
    marginTop: ms(1),
  },
});
