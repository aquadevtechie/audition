
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../Themes/';


const styles = StyleSheet.create({

  header: {
    backgroundColor: "#0e1130",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.02),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },
  headerSec: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25)
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  backArrow: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
  right: {
    flex: 0.5
  },
  
  borderhorizontal: {
    width: Metrics.WIDTH,
    backgroundColor: "#f4f4f4",
    height: 1
  },

  contentView: {
    flex: 1
  },

  subScrollView: {
    paddingTop: Metrics.HEIGHT * 0.05,
    alignItems: "center"
  },

  infoText: {
    fontSize: Fonts.moderateScale(16),
    color: "#929292",
    fontFamily: Fonts.type.helveticaRegular,
    width: Metrics.WIDTH * 0.8
  },

  divider: {
    height: 1,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "#dbdbdb",
    ...Platform.select({
      ios: {
        marginTop: 8
      },
      android: {
        marginTop: -5
      }
    })
  },

  mainstyle: {
    width: Metrics.WIDTH * 0.75,
    ...Platform.select({
      ios: {
        marginTop: 15
      },
      android: {
        marginTop: 18
      }
    })
  },

  dropdownstyle: {
    color: "#929292",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular,
    maxHeight: Metrics.HEIGHT * 0.13,
    width: Metrics.WIDTH * 0.8
  },

  dropdownTextStyle: {
    color: "#929292",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular,
    paddingLeft: Metrics.HEIGHT * 0.01
  },

  textStyle: {
    color: "#929292",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular,
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.008
  },

  genderDivider: {
    height: 1,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "#dbdbdb",
    ...Platform.select({
      ios: {},
      android: { marginTop: 3 }
    })
  },

  signUpBg: {
    marginTop: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.8
  },

  linearGradientView: {
    width: Metrics.WIDTH * 0.8,
    alignItems: "center",
    paddingVertical: 15
  },

  signUpBtnText: {
    color: "#ffffff",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(14)
  },

  faceBookBg: {
    marginTop: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.8,
    flexDirection: "row",
    backgroundColor: "#0054a6",
    justifyContent: "center",
    marginBottom: 30,
    paddingVertical: 8,
    alignItems: "center"
  },

  alreadyText: {
    color: "#929292",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(16),
    marginBottom: Metrics.HEIGHT * 0.08
  },
  applicationForm: {
    alignItems: 'center',
    height:Metrics.HEIGHT * 0.10,
    backgroundColor: '#0366d6',
    padding:20,
    borderRadius:15,
    marginTop: Metrics.HEIGHT * 0.05,
    marginLeft: Metrics.WIDTH * 0.05,
    marginRight: Metrics.WIDTH * 0.10,
    marginBottom: Metrics.HEIGHT * 0.05
  }
});

export default styles;