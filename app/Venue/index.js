import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Image
} from "react-native";
import { Header, Left, Right, Body, Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const NotificationData = [
  {
    id: 1,
    NotificationCode: "CODE #0231",
    NotificationHours: "5 Seconds ago",
    NotificationCarDetected: "Car disturbance has been detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 2,
    NotificationCode: "CODE #0232",
    NotificationHours: "2 Seconds ago",
    NotificationCarDetected: "Diagnostic Trouble Code(DTC) detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 3,
    NotificationCode: "CODE #0233",
    NotificationHours: "5 Seconds ago",
    NotificationCarDetected: "Car disturbance has been detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 4,
    NotificationCode: "CODE #0235",
    NotificationHours: "7 Seconds ago",
    NotificationCarDetected: "Diagnostic Trouble Code(DTC) detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 5,
    NotificationCode: "CODE #0238",
    NotificationHours: "5 Seconds ago",
    NotificationCarDetected: "Car disturbance has been detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 6,
    NotificationCode: "CODE #0239",
    NotificationHours: "6 Seconds ago",
    NotificationCarDetected: "Diagnostic Trouble Code(DTC) detected",
    NotificationAddress: "115 Utah Ave S, Seattle WA 98111"
  },
  {
    id: 7,
    NotificationCode: "CODE #0240",
    NotificationHours: "9 Seconds ago",
    NotificationCarDetected: "Diagnostic Trouble Code(DTC) detected",
    NotificationAddress: "1200 Ave North, Seattle WA 98109"
  }
];

var screenName = "";

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("Drawer");
    return true;
  };

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
              {screenName == "SideMenu" ? (
                <TouchableOpacity
                  onPress={() => this.props.navigation.openDrawer()}
                >
                  <Image
                    source={Images.MenuIcon}
                    style={{ width: 25, height: 25, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Drawer")}
                >
                  <Ionicons
                    name="ios-arrow-back"
                    color="#ffffff"
                    size={30}
                    style={{ marginLeft: 5 }}
                  />
                </TouchableOpacity>
              )}
            </Left>
            <Body style={styles.body}>
              <Text style={styles.headertitle}>Venues</Text>
            </Body>
            <Right style={styles.right} />
          </Header>
        </LinearGradient>
        <View style={styles.MainReanderBg}>
          <Content>
            {NotificationData.map((item, index) => {
              return (
                <View key={index} style={{ backgroundColor: "#fff" }}>
                  <TouchableOpacity
                    style={styles.mainContentBg}
                    onPress={() => {
                      this.props.navigation.navigate("VenueSingle", {
                        NotificationCode: item.NotificationCode,
                        NotificationHours: item.NotificationHours,
                        NotificationCarDetected: item.NotificationCarDetected,
                        NotificationAddress: item.NotificationAddress
                      });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: Metrics.HEIGHT * 0.01
                      }}
                    >
                      <Text style={styles.NotificationCode}>
                        {item.NotificationCode}
                      </Text>
                      <Text style={styles.NotificationHours}>
                        {item.NotificationHours}
                      </Text>
                    </View>
                    <Text style={styles.NotificationCarDetected}>
                      {item.NotificationCarDetected}
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
                      <Image
                        source={Images.MapMarker}
                        style={styles.MapMarker}
                      />
                      <Text style={styles.NotificationAddress}>
                        {item.NotificationAddress}{" "}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.HorizontalDivider} />
                </View>
              );
            })}
          </Content>
        </View>
      </View>
    );
  }
}
