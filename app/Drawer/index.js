import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Alert,
  I18nManager
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title
} from "native-base";
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0
  }
};

import Video from 'react-native-video';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Carousel, { ParallaxImage , Pagination} from 'react-native-snap-carousel';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import tweens from "./tweens";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../Themes/";
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';



export default class DrawerSocialSmall extends Component {
  constructor(props, context) {
    super(props, context);
    const cardBg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFnHJsE8uzmYtD2klBoevGCeZ9CnTN9GnzZt_4OCXLMUr5twmJAzVqgK5";
    const cardBgOne =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_img02_s21_29.jpg";
    const cardBgTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_img04_s21_29.jpg";
    const cardBgThree =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_img03_s21_29.jpg";
    const profileImgOne =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_propic01_s21_29.png";
    const profileImgTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_propic04_s21_29.png";
    const dataObjects = [
      {
        id: 1,
        text: "one",
        cardBg: { uri: cardBgOne },
        profileImage: { uri: profileImgOne },
      },
      {
        id: 2,
        text: "two",
        cardBg: { uri: cardBgTwo },
        profileImage: { uri: profileImgTwo },
      },
      {
        id: 3,
        text: "three",
        cardBg: { uri: cardBgThree },
        profileImage: { uri: profileImgOne },
      },
      {
        id: 4,
        text: "four",
        cardBg: { uri: cardBgOne },
        profileImage: { uri: profileImgTwo },
      },
      {
        id: 5,
        text: "five",
        cardBg: { uri: cardBgTwo },
        profileImage: { uri: profileImgOne },
      }
    ];
    this.state = {
      drawerType: "overlay",
      openDrawerOffset: Metrics.WIDTH * 0.10,
      closedDrawerOffset: 0,
      panOpenMask: 0.0,
      relativeDrag: false,
      panThreshold: 0.01,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: "linear",
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: true,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: true,
      side: "left",
      dataSource: dataObjects,
      //youtube controls
      isReady: false,
      status: "",
      quality: "",
      error: "",
      activeSlide: 0,
      open: false,
      //react native video control
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      paused: false,
      isLoading: true,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'content',
    };
  }
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      Alert.alert(
        "Quit App?",
        "Are you sure you want to exit App?",
        [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => true }
        ],
        { cancelable: true }
      );
      return true;
    });
  }
  setDrawerType(type) {
    this.setState({
      drawerType: type
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    });
  }

  openDrawer() {
    this.setState({
      open: true
    })
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  //For Video player
  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };
 
  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };
 
  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };
 
  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text style={{color:'#fff'}}> How to Apply </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
  //end For Video Player

  get pagination () {
    const { dataSource, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={dataSource.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'transparent' ,marginTop: (Metrics.HEIGHT * 0.03), paddingTop: (Metrics.HEIGHT * 0.0)}}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

  _renderRow({item, index}, parallaxProps) {
    return (
      <View style={styles.rowMain}>
       <Text numberOfLines={1}>{item.text}</Text>
          <ParallaxImage containerStyle={styles.cardImage} style={styles.cardBgImage} source={item.cardBg} parallaxFactor={0.4} {...parallaxProps} />
        <Text style={{fontSize: 20}} numberOfLines={2}>
                    { item.text }
          </Text>         
        
      </View>
    );
  }

  render() {
    var controlPanel = (
      <MyControlPanel navigation={this.props.navigation}
        closeDrawer={() => {
          this.drawer.close();
        }}
      />
    );
    return (
      <View style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
          
        >
          <View style={styles.drawercontainer}>
            <Header style={styles.headerSec}>
              <Left style={styles.left}>
                <TouchableOpacity
                  onPress={() => this.openDrawer()}
                  style={styles.backArrow}
                >
                  <MaterialCommunityIcons name="menu" size={30} color="#fff" />
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>[...] Audition</Text>
              </Body>
              <Right style={styles.right}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Drawer")}
                  style={styles.backArrow}
                >
                  {I18nManager.isRTL ? (
                    <Ionicons
                      name="ios-arrow-round-forward"
                      size={30}
                      color="#ffffff"
                    />
                  ) : (
                    <Ionicons
                      name="ios-arrow-round-back"
                      size={30}
                      color="#ffffff"
                    />
                  )}
                </TouchableOpacity>
              </Right>
            </Header>
            <View style={{flex: 4}}>
            <Carousel 
                sliderWidth={(Metrics.WIDTH * 0.95)}
                sliderHeight={(Metrics.HEIGHT * 0.55)}
                itemWidth = {(Metrics.WIDTH * 0.90)}
                hasParallaxImages={true}
                data={this.state.dataSource}
                renderItem={this._renderRow}
                // onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />
            {/* { this.pagination } */}
            </View>
            <View style={{flex:6}}>
            <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("AuditionForm")}
                  style={styles.applicationForm}
                  >
                    <View style={{flex:1, flexDirection:"row"}}>
                    <View style={{flex:3 , justifyContent:"flex-start"}} >
                      <View style={{alignSelf:"center"}}>
                      <Ionicons
                      name="ios-paper"
                      size={25}
                      color="#ffffff"
                        />
                      </View>
                     </View>
                     <View style={{flex:4, justifyContent:"center"}}> 
                     <View style={{alignSelf:"flex-start"}}> 
                    <Text 
                      style = {{textAlign:"center",
                      fontSize: 20, color:'white',fontWeight:'bold'  }}
                    >
                      Audition 
                    </Text>
                    </View>
                    </View> 
                    </View>

            </TouchableOpacity>
            <View >
              <Text style={{ alignItems: "center", alignSelf: "center", marginBottom:0, paddingBottom:0,marginTop:0,paddingTop:0, fontSize:23, fontWeight:'bold', justifyContent:"center", color:"white", }}>
                How To Apply
              </Text>
            </View>
            <View style={{flex:1}}>
            <Video
                onEnd={this.onEnd}
                onLoad={this.onLoad}
                onLoadStart={this.onLoadStart}
                onProgress={this.onProgress}
                paused={this.state.paused}
                ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                resizeMode={this.state.screenType}
                onFullScreen={this.state.isFullScreen}
                toolbar={this.renderToolbar()}
                source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
                style={styles.backgroundVideo}
                volume={10}
              />
              <MediaControls
                duration={this.state.duration}
                isLoading={this.state.isLoading}
                mainColor="#333"
                onFullScreen={this.onFullScreen}
                onPaused={this.onPaused}
                onReplay={this.onReplay}
                onSeek={this.onSeek}
                onSeeking={this.onSeeking}
                playerState={this.state.playerState}
                progress={this.state.currentTime}
                toolbar={this.renderToolbar()}
              />
            </View>

            </View>

          </View>
        </Drawer>
      </View>
    );
  }
}
