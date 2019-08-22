import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  BackHandler,
  Image,
  TouchableOpacity
} from "react-native";
import { Content, Header, Left, Right, Body, Title } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

export default class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankAccountArray: [
        {
          id: 1,
          account: "Franklin Campbell - ***7809"
        },
        {
          id: 2,
          account: "Franklin Campbell - ***2354"
        }
      ],

      creditCardArray: [
        {
          id: 1,
          card: "**** **** **** 2759",
          cardImg: Images.visa_food
        },
        {
          id: 2,
          card: "franklin_camp@gmail.com",
          cardImg: Images.paypal_food
        },
        {
          id: 3,
          card: "**** **** **** 1351",
          cardImg: Images.master_food
        }
      ]
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("Profiles");
    return true;
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.backPressed()}>
              <MaterialIcons
                name="keyboard-backspace"
                color="#FFFFFF"
                size={25}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.headertitle}>PAYMENT METHOD</Title>
          </Body>
          <Right style={styles.right}>
            <Ionicons name="ios-search" size={25} color="#FFFFFF" />
          </Right>
        </Header>

        <View style={{ flex: 1 }}>
          <Content>
            <View style={styles.addNewView}>
              <FontAwesome name="credit-card-alt" size={25} color="#F05522" />
              <Text style={styles.addNewCard}>Add a new Card</Text>
              <Entypo name="chevron-small-right" size={30} color="#C2C4CA" />
            </View>

            <Text style={styles.titleText}>BANK ACCOUNT</Text>

            {this.state.bankAccountArray.map((item, index) => {
              return (
                <View key={index}>
                  <View style={[styles.addNewView, { marginTop: 0 }]}>
                    <Text style={styles.nameText}>{item.account}</Text>
                    <Entypo
                      name="chevron-small-right"
                      size={30}
                      color="#C2C4CA"
                    />
                  </View>
                  <View style={{ height: 1, backgroundColor: "#F5F5F5" }} />
                </View>
              );
            })}

            <Text style={styles.titleText}>CREDIT CARDS</Text>

            {this.state.creditCardArray.map((item, index) => {
              return (
                <View key={index}>
                  <View style={[styles.addNewView, { marginTop: 0 }]}>
                    <Text
                      style={[styles.nameText, { width: Metrics.WIDTH * 0.6 }]}
                    >
                      {item.card}
                    </Text>
                    <Image
                      source={item.cardImg}
                      style={{
                        height: 30,
                        width: Metrics.WIDTH * 0.35,
                        resizeMode: "contain",
                        alignSelf: "flex-end"
                      }}
                    />
                  </View>
                  <View style={{ height: 1, backgroundColor: "#F5F5F5" }} />
                </View>
              );
            })}
          </Content>
        </View>
      </View>
    );
  }
}
