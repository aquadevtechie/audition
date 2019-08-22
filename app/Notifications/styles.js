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

  MainListBg: {
    backgroundColor: "#f5f5f5",
    flex: 1
  },

  mainRenderView: {
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingRight: Metrics.HEIGHT * 0.01,

    backgroundColor: "#fff"
  },

  FoodImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1
      },
      android: {
        width: Metrics.WIDTH * 0.23,
        height: Metrics.HEIGHT * 0.13
      }
    }),
    borderRadius: 8,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

  FoodName: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.7
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.7
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  FoodDes: {
    color: "#4a4a4a",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.6,
    marginTop: Metrics.HEIGHT * 0.01
  },

  FoodMin: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    marginTop: Metrics.HEIGHT * 0.01
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    height: 1,
    width: Metrics.WIDTH,
    marginTop: Metrics.HEIGHT * 0.02
  }
});

export default styles;
