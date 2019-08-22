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

  tabUnderLine: {
    backgroundColor: "#f05522",
    height: 2
  },

  tabText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginBottom: Metrics.HEIGHT * 0.01
  },

  FoodImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1
      },
      android: {
        width: Metrics.WIDTH * 0.23,
        height: Metrics.HEIGHT * 0.12
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
        width: Metrics.WIDTH * 0.6
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  MoneyText: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  horizontalBorder: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01
  },

  MoneyText: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  horizontalBorder: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01
  },

  MainRenderView: {
    backgroundColor: "#fff"
  }
});

export default styles;
