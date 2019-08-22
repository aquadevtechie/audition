import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  TextInput
} from "react-native";

import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class WelcomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FoodLogin");
    return true;
  };

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
          enableAutomaticScroll={false}
          enableAutoAutomaticScrol="true"
          enableOnAndroid={true}
        >
          <ImageBackground
            source={Images.Welcome_mainBg}
            style={styles.Welcome_mainBg}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: Metrics.HEIGHT * 0.09,
                marginLeft: Metrics.HEIGHT * 0.03
              }}
            >
              <Image source={Images.ProfileImg} style={styles.ProfileImg} />
              <Text style={styles.profileNameText}>Hi, John</Text>
            </View>
            <Text style={styles.ProfileDesText}>
              What can we server you today?
            </Text>
            <View style={styles.SearchBg}>
              <AntDesign
                name="search1"
                size={20}
                color="#c2c4ca"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.015
                }}
              />
              <TextInput
                style={styles.RestaurantsSearch}
                maxLength={40}
                placeholder="Search for address,food.."
                placeholderTextColor="#c2c4ca"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
              <Entypo
                name="location-pin"
                size={25}
                color="#f05522"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.01
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.SearchMainBg}
              onPress={() => this.props.navigation.navigate("SearchResultOne")}
            >
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
