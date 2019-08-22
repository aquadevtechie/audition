import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff"
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
    fontSize: Fonts.moderateScale(20),
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
    marginBottom: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  MainMapView: {
    width: Metrics.WIDTH,

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.8
      },
      android: {
        height: Metrics.HEIGHT * 0.75
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02,
    borderWidth: 1,
    borderColor: "#dadada"
  },

  LocationIcon: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.08
  },

  MapMarker: {
    height: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.03,
    resizeMode: "contain"
  }
});

export default styles;
