import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../Themes/";

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },

  HeaderBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      ios: {},
      android: {
        height: Metrics.HEIGHT * 0.13
      }
    })
  },

  leftheader: {
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
    fontWeight: "normal",
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  ReviewsText: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02
  },

  mainListBg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.84
      },
      android: {
        height: Metrics.HEIGHT * 0.8
      }
    })
  },

  ReviewsImg: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.HEIGHT * 0.08,
    borderRadius: Metrics.HEIGHT * 0.04,
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ReviewsName: {
    color: "#4a4a4a",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02
  },

  ReviewsHours: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.01,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ReviewDes: {
    color: "#4a4a4a",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.01,
    marginLeft: Metrics.HEIGHT * 0.02,
    width: Metrics.WIDTH * 0.7
  },

  HorizontalLine: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  mainRenderView: {
    paddingLeft: Metrics.HEIGHT * 0.02,

    marginTop: Metrics.HEIGHT * 0.01
  },

  PhotoImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1
      },
      android: {
        width: Metrics.WIDTH * 0.22,
        height: Metrics.HEIGHT * 0.12
      }
    }),
    borderRadius: 12
  },

  MainBgFoodMenu: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.78,
    marginLeft: Metrics.HEIGHT * 0.02
  }
});

export default styles;
