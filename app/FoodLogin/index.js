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
  TextInput,
  I18nManager
} from "react-native";
import { Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./style";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class FoodLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("FirstScreen");
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
        <ImageBackground source={Images.food_login_bg} style={styles.mainImg}>
          <Image source={Images.food_logo} style={styles.logoImg} />

          <View style={styles.middleMainView}>
            <Content>
              <TextInput
                ref="username"
                style={styles.infoText}
                maxLength={30}
                placeholder="Username"
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                value={this.state.userName}
                onChangeText={userName => this.setState({ userName: userName })}
                onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                returnKeyType="next"
              />

              <View style={styles.firstDivider} />

              <TextInput
                secureTextEntry
                ref="password"
                style={styles.infoText}
                maxLength={16}
                placeholder="Password"
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                value={this.state.password}
                onChangeText={password => this.setState({ password: password })}
                returnKeyType="done"
              />

              <View style={styles.secondDivider} />

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TabView")}
                style={[
                  styles.btnBg,
                  {
                    backgroundColor: "#F05522",
                    marginTop: Metrics.HEIGHT * 0.1
                  }
                ]}
              >
                <Text style={styles.btnText}>LOGIN</Text>
              </TouchableOpacity>
            </Content>
          </View>

          <View style={styles.bottomMainView}>
            <TouchableOpacity
              style={[styles.btnBg, { backgroundColor: "#2A64D1" }]}
            >
              <EvilIcons name="sc-facebook" color="#FFFFFF" size={30} />
              <Text style={styles.btnText}>CONNECT WITH FACEBOOK</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <Text style={{ color: "#F05522" }}>Sign Up</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
