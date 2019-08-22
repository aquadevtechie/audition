import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  HeaderBg: {
    backgroundColor: "#F5F5F5",
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
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(20)
  },

  contentView: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.82
      },
      android: {
        height: Metrics.HEIGHT * 0.79
      }
    })
  },

  timeMainRow: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    paddingHorizontal: 2
  },

  timeSelectedText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow,
    backgroundColor: "#F05522",
    borderRadius: 5,
    paddingHorizontal: 22,
    paddingVertical: 5
  },

  timeUnselectedText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    color: "#000000",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    paddingHorizontal: 22,
    paddingVertical: 2
  },

  orderingMainView: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.snow
  },

  orderingText: {
    color: "#C2C4CA",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16)
  },

  personMainView: {
    flexDirection: "row",
    marginTop: 15
  },

  numPersonText: {
    color: "#9B9B9B",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    width: Metrics.WIDTH * 0.4
  },

  personText: {
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    width: Metrics.WIDTH * 0.47,
    textAlign: "right"
  },

  menuMainRow: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  menuImg: {
    height: Metrics.HEIGHT * 0.12,
    width: Metrics.HEIGHT * 0.16,
    borderRadius: 5
  },

  menuTextView: {
    width: Metrics.WIDTH * 0.47,
    marginLeft: 10
  },

  itemText: {
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(14)
  },

  itemPrice: {
    color: "#9B9B9B",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  bottomMainView: {
    backgroundColor: "#F05522",
    height: Metrics.HEIGHT * 0.08,
    bottom: 0,
    position: "absolute",
    width: Metrics.WIDTH,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  bottomText: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16)
  },

  modalView: {
    backgroundColor: Colors.snow,
    borderRadius: 10,
    width: Metrics.WIDTH * 0.9,
    alignItems: "center",
    paddingVertical: 30
  },

  deliveryBoyImg: {
    width: Metrics.HEIGHT * 0.2,
    height: Metrics.HEIGHT * 0.2
  },

  thankYouText: {
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(22),
    marginTop: Metrics.HEIGHT * 0.03
  },

  successMsg: {
    color: "#000000",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: 15
  },

  okText: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  }
});

export default styles;
