import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#ebebeb"
  },

  HeaderBg: {
    backgroundColor: "transparent",
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
    color: "#ffffff",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(20)
  },

  MainReanderBg: {
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.9
      },
      android: {
        height: Metrics.HEIGHT * 0.87
      }
    }),
    backgroundColor: "#f5f5f5"
  },

  mainContentBg: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.91
  },

  NotificationCode: {
    color: "#00999e",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  NotificationHours: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  NotificationCarDetected: {
    color: "#31373d",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: Metrics.WIDTH * 0.9,
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.01
      },
      android: {}
    })
  },

  NotificationAddress: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  HorizontalDivider: {
    backgroundColor: "#d4d4d4",
    width: Metrics.WIDTH,
    height: 1,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.01
  },

  MapMarker: {
    height: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.03,
    resizeMode: "contain"
  }
});

export default styles;
