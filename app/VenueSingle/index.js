import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  Image
} from "react-native";
import { Header, Left, Right, Body, Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./styles";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

var NotificationCode = "";
var NotificationHours = "";
var NotificationCarDetected = "";
var NotificationAddress = "";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class NotificationsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    const { navigation } = this.props;

    NotificationCode = navigation.getParam("NotificationCode");
    NotificationHours = navigation.getParam("NotificationHours");
    NotificationCarDetected = navigation.getParam("NotificationCarDetected");
    NotificationAddress = navigation.getParam("NotificationAddress");
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("Venue");
    return true;
  };

  renderCallout() {
    if (this.state.calloutIsRendered === true) return;
    this.setState({ calloutIsRendered: true });
    this.marker.showCallout();
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#48c48a", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainView}>
        <LinearGradient
          locations={[0.1, 0.75]}
          colors={["#48c48a", "#a2e6a5"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.left}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Venue")}
              >
                <Ionicons name="ios-arrow-back" color="#ffffff" size={30} />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.headertitle}>Issue {NotificationCode}</Text>
            </Body>
            <Right style={styles.right} />
          </Header>
        </LinearGradient>
        <View style={styles.mainContentBg}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: Metrics.HEIGHT * 0.01
            }}
          >
            <Text style={styles.NotificationCode}>{NotificationCode}</Text>
            <Text style={styles.NotificationHours}>{NotificationHours}</Text>
          </View>
          <Text style={styles.NotificationCarDetected}>
            {NotificationCarDetected}
          </Text>
          <View
            style={{
              flexDirection: "row",
              ...Platform.select({
                ios: {
                  marginTop: Metrics.HEIGHT * 0.01
                },
                android: {}
              })
            }}
          >
            <Image source={Images.MapMarker} style={styles.MapMarker} />
            <Text style={styles.NotificationAddress}>
              {NotificationAddress}{" "}
            </Text>
          </View>
        </View>

        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 47.57369,
            longitude: -122.33515,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          style={{ flex: 1 }}
          onRegionChangeComplete={() => this.renderCallout()}
        >
          <MapView.Marker
            coordinate={{
              latitude: 47.57369,
              longitude: -122.33515,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
            ref={marker => (this.marker = marker)}
          >
            <Image source={Images.LocationIcon} style={styles.LocationIcon} />

            <MapView.Callout>
              <View style={{ width: Metrics.WIDTH * 0.4 }}>
                <Text style={{ textAlign: "center" }}>
                  115 Utah Ave S, Seattle, WA 98111
                </Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Circle
            center={{ latitude: 47.57369, longitude: -122.33515 }}
            radius={700}
            strokeWidth={0}
            strokeColor={"transparent"}
            fillColor={"rgba(54, 188, 132, 0.2)"}
          />
        </MapView>
      </View>
    );
  }
}
