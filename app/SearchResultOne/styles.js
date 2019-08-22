import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../Themes/";

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#f05522"
  },

  SearchTabMain: {
    width: Metrics.WIDTH,
    backgroundColor: "#f05522"
  },

  searchMainView: {
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.04
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.05
      }
    }),
    marginLeft: Metrics.HEIGHT * 0.01,
    marginRight: Metrics.HEIGHT * 0.01
  },

  SearchBg: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.055
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    flexDirection: "row"
  },

  borderVertical: {
    width: 1,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.04
      },
      android: {
        height: Metrics.HEIGHT * 0.05
      }
    }),
    backgroundColor: "#ebeced",
    alignSelf: "center"
  },

  RestaurantsSearch: {
    width: Metrics.WIDTH * 0.45,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  locationText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#262628",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center"
  },

  tabUnderLine: {
    backgroundColor: "transparent",
    height: 0
  },

  tabText: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(14)
  },

  FilterMainBg: {
    backgroundColor: "#ebebeb",
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    flexDirection: "row",
    alignSelf: "center"
  },

  filterText: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(15),
    color: "#262628",
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01,
    width: Metrics.WIDTH * 0.7
  },

  menuIcon: {
    height: Metrics.HEIGHT * 0.045,
    width: Metrics.WIDTH * 0.045,
    resizeMode: "contain",
    alignSelf: "center"
  },

  filterRoundBg: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.WIDTH * 0.045,
    alignSelf: "center",
    borderRadius: 3,
    marginLeft: Metrics.HEIGHT * 0.025
  },

  mainRenderview: {
    backgroundColor: "#f5f5f5"
  },

  mainListContent: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.75
      },
      android: {
        height: Metrics.HEIGHT * 0.7
      }
    }),
    backgroundColor: "#f5f5f5",
    marginBottom: Metrics.HEIGHT * 0.02
  },

  mainListContentGrid: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.75,
        marginTop: Metrics.HEIGHT * 0.01
      },
      android: {
        height: Metrics.HEIGHT * 0.68,
        marginTop: Metrics.HEIGHT * 0.02
      }
    }),
    backgroundColor: "#f5f5f5",
    marginBottom: Metrics.HEIGHT * 0.02
  },

  mainListRenderRow: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: Metrics.WIDTH * 0.93,
    borderRadius: 2,
    marginTop: Metrics.HEIGHT * 0.02,
    shadowColor: "#f9f9f9",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.1
  },

  Foodimg: {
    width: Metrics.WIDTH * 0.93,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.22,
        borderRadius: 2
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderRadius: 2
      }
    })
  },

  FoodDetailsText: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  FoodANameText: {
    color: "#d4d6da",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  reviewText: {
    color: "#d4d6da",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.02
  },

  hearticon: {
    position: "absolute",
    top: 0,
    alignSelf: "flex-end"
  },

  listContentGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      ios: {
        paddingHorizontal: Metrics.HEIGHT * 0.013,
        paddingVertical: Metrics.HEIGHT * 0.013
      },
      android: {
        paddingHorizontal: Metrics.HEIGHT * 0.01,
        paddingVertical: Metrics.HEIGHT * 0.01
      }
    })
  },

  listMainviewBg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.46
      },
      android: {
        width: Metrics.WIDTH * 0.47
      }
    }),
    backgroundColor: "#fff",
    borderRadius: Metrics.HEIGHT * 0.005,
    marginBottom: Metrics.HEIGHT * 0.015,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#bec1c2"
  },

  FoodimgGrid: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.23,
        borderRadius: 1.8,
        width: Metrics.WIDTH * 0.46
      },
      android: {
        height: Metrics.HEIGHT * 0.27,
        width: Metrics.WIDTH * 0.47,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
      }
    })
  },

  ratingStarGrid: {
    height: Metrics.HEIGHT * 0.022,
    width: Metrics.HEIGHT * 0.022,
    marginLeft: Metrics.HEIGHT * 0.01
  }
});

export default styles;
