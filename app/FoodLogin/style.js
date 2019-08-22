import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "orange"
  },

  mainImg: {
    flex: 1
  },

  logoImg: {
    height: Metrics.HEIGHT * 0.15,
    width: Metrics.WIDTH * 0.6,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: Metrics.HEIGHT * 0.11
  },

  middleMainView: {
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.55,
    alignSelf: "center",
    paddingTop: 30
  },

  infoText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  firstDivider: {
    height: 1,
    backgroundColor: "#8C8C8C",
    ...Platform.select({
      ios: { marginTop: 15, marginBottom: 30 },
      android: {
        marginTop: 0,
        marginBottom: 20
      }
    })
  },

  secondDivider: {
    height: 1,
    backgroundColor: "#8C8C8C",
    ...Platform.select({
      ios: { marginTop: 15 },
      android: {
        marginTop: 0
      }
    })
  },

  btnBg: {
    width: Metrics.WIDTH * 0.85,
    backgroundColor: "#F05522",
    flexDirection: "row",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  btnText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF"
  },

  bottomMainView: {
    alignItems: "center",
    marginVertical: Metrics.HEIGHT * 0.03
  },

  signUpText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF",
    marginTop: Metrics.HEIGHT * 0.03
  }
});

export default styles;
