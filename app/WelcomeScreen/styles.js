import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff"
  },

  Welcome_mainBg: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
  },

  ProfileImg: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.HEIGHT * 0.08,
    borderRadius: Metrics.HEIGHT * 0.04,
    borderWidth: 2,
    borderColor: "#fff"
  },

  profileNameText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ProfileDesText: {
    marginLeft: Metrics.HEIGHT * 0.03,
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(40),
    marginTop: Metrics.HEIGHT * 0.07,
    width: Metrics.WIDTH * 0.7
  },

  SearchBg: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.05
  },

  RestaurantsSearch: {
    width: Metrics.WIDTH * 0.7,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  SearchMainBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: "center"
  },

  searchText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center",
    alignItems: "center"
  }
});

export default styles;
