import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  HeaderBg: {
    backgroundColor: "#F05522",
    borderBottomWidth: 1
  },

  left: {
    flex: 1
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1
  },

  headertitle: {
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18)
  },

  addNewView: {
    marginTop: 20,
    backgroundColor: Colors.snow,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },

  addNewCard: {
    color: "#9B9B9B",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: 20,
    width: Metrics.WIDTH * 0.7
  },

  titleText: {
    color: "#C2C4CA",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    paddingHorizontal: 15,
    marginTop: Metrics.HEIGHT * 0.06,
    marginBottom: 10
  },

  nameText: {
    color: "#4A4A4A",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    width: Metrics.WIDTH * 0.85
  }
});

export default styles;
