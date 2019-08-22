import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Platform
} from "react-native";
import { Container, Icon, Right, Header, Left, Title, Body } from "native-base";
import styles from "./styles";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new ListView.DataSource({ rowHasChanged });

var NotificationData = [
  {
    id: 1,
    FoodImg: Images.Food_Img_ic_one,
    FoodName: "SteakSalad",
    FoodDes:
      "If you're cooking you food properly on your barbeque,you're getting delightful results every time.",
    FoodMin: "20 mins"
  },
  {
    id: 2,
    FoodImg: Images.Food_Img_ic_two,
    FoodName: "Stuffed Trout",
    FoodDes: "Proper cookery renders good food material more digestible",
    FoodMin: "2 hours"
  },
  {
    id: 3,
    FoodImg: Images.Food_Img_ic_three,
    FoodName: "TBone",
    FoodDes:
      "Many people understand the concept of passive solar for heating a home",
    FoodMin: "Yesterday"
  },
  {
    id: 4,
    FoodImg: Images.Food_Img_ic_four,
    FoodName: "burger",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days"
  },
  {
    id: 5,
    FoodImg: Images.Food_Img_ic_five,
    FoodName: "cafeannie",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days"
  }
];

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: NotificationData
    };
  }

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

  _renderRow(rowData) {
    var that = this;

    return (
      <View style={styles.mainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={rowData.FoodImg} style={styles.FoodImg} />
          <View>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            <Text style={styles.FoodDes}>{rowData.FoodDes}</Text>
            <Text style={styles.FoodMin}>{rowData.FoodMin}</Text>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
      </View>
    );
  }
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity>
                <View>
                  <AntDesign
                    name="search1"
                    size={20}
                    color="#fff"
                    style={{
                      alignSelf: "center",
                      marginLeft: Metrics.HEIGHT * 0.015
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>NOTIFICATIONS</Title>
            </Body>
            <Right style={styles.right} />
          </Header>

          <View style={styles.MainListBg}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item})=>this._renderRow(item)}
            //   enableEmptySections
            //   pageSize={4}
            //   showsHorizontalScrollIndicator={false}
            />
          </View>
        </Container>
      </View>
    );
  }
}
