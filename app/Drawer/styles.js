
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },
  headerSec: {
    backgroundColor: '#f7b500',
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
  mainview:{
    backgroundColor: '#f7b500',
  },
  bannerOverlay: {
    height:(Metrics.HEIGHT * 0.10),
    width:(Metrics.WIDTH * 0.70),
    color:'#f7b500'
  },

  headertxt:{
    fontSize: Fonts.moderateScale(32),
    textAlign: 'center',
    color:'white'
  },

  listrow:{
    backgroundColor: '#f7b500',
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    justifyContent:'space-around',
    paddingTop: (Metrics.HEIGHT * 0.02),
    paddingBottom: (Metrics.HEIGHT * 0.03),
    marginBottom: (Metrics.HEIGHT * 0.001),
  },

  rowicon:{
    height: (Metrics.HEIGHT * 0.035),
    flex:3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH * 0.1)
  },

  rowtxt:{
    color:'white',
    flex:6,
    alignItems:'flex-start',
    marginLeft: -1 * (Metrics.WIDTH * 0.05),
    fontSize: Fonts.moderateScale(20),
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  profileBody: {
    height: (Metrics.HEIGHT * 0.175),
    backgroundColor: '#f7b500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    height: (Metrics.HEIGHT * 0.1),
    width: (Metrics.HEIGHT * 0.1),
    borderRadius: (Metrics.HEIGHT * 0.05),
    borderWidth: (Metrics.WIDTH * 0.0065),
    borderColor: 'white',
  },
  
  imgContainer: {
    width: Metrics.WIDTH * 0.52,
    height: Metrics.HEIGHT * 0.63,
    alignItems: "center",
    justifyContent: "center"
  },

  cardImage: {
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: 6,
    height: Metrics.HEIGHT * 0.40,
    width: Metrics.WIDTH * 0.90,
    alignItems: "center",
    justifyContent: "center"
  },

  cardBgImage: {
    borderRadius: 6,
    height: Metrics.HEIGHT * 0.35,
    width: Metrics.WIDTH * 0.86,
    backgroundColor:"white",
    resizeMode: 'cover',
  },

  rowMain: {
    marginHorizontal: Metrics.WIDTH * 0.05,
    marginTop: Metrics.HEIGHT * 0.04
  },
  backgroundVideo: {
    position: 'absolute',
    height: (Metrics.HEIGHT*0.65),
    width: (Metrics.WIDTH * 0.85),
    top: 5,
    left: 20,
    bottom: 0,
    right: 0,
  },

  applicationForm: {
    height:Metrics.HEIGHT * 0.08,
    backgroundColor: '#f7b500',
    padding:20,
    paddingBottom:5,
    borderRadius:10,
    marginTop: Metrics.HEIGHT * 0.05,
    marginLeft: Metrics.WIDTH * 0.07,
    marginRight: Metrics.WIDTH * 0.11,
    marginBottom: Metrics.HEIGHT * 0.01
  }
});

export default styles;
