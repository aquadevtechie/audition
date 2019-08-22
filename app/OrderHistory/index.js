import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Easing,
  Platform
} from "react-native";
import {
  Content,
  Container,
  Icon,
  Right,
  Header,
  Left,
  Title,
  Body
} from "native-base";
import styles from "./styles";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Rating from "react-native-rating";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new ListView.DataSource({ rowHasChanged });

var orderHistory = [
  {
    id: 1,
    FoodImg: Images.Food_Img_one,
    FoodPrice: "312.00",
    FoodName: "Cocobolo Poolside Bar + Grill"
  },
  {
    id: 2,
    FoodImg: Images.Food_Img_two,
    FoodPrice: "215.00",
    FoodName: "Cheesecake"
  },
  {
    id: 3,
    FoodImg: Images.Food_Img_three,
    FoodPrice: "150.00",
    FoodName: "ChocolateCake"
  },
  {
    id: 4,
    FoodImg: Images.Food_Img_four,
    FoodPrice: "100.00",
    FoodName: "Cocktail"
  },
  {
    id: 5,
    FoodImg: Images.Food_Img_five,
    FoodPrice: "250.00",
    FoodName: "CremeBrulee"
  }
];

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: orderHistory
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
            <Text style={styles.FoodAdd}>60 Kub Pines Apt.797</Text>
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Rating
                initial={4}
                onChange={rating => console.log(rating)}
                selectedStar={Images.seletedstar}
                unselectedStar={Images.starEmpty1}
                config={{
                  easing: Easing.inOut(Easing.ease),
                  duration: 350
                }}
                stagger={80}
                maxScale={2.4}
                starStyle={styles.ratingStar}
                editable={false}
              />
              <Text style={styles.reviewText}>238 reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.DateTimeMainView}>
            <MaterialCommunityIcons
              name="file-document-box"
              size={25}
              color="#f05522"
            />
            <Text style={styles.DateTimeText}>28 Nov 2017 10:30 AM</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginRight: Metrics.HEIGHT * 0.01
            }}
          >
            <MaterialCommunityIcons
              name="currency-usd"
              color="#f05522"
              size={25}
            />
            <Text style={styles.MoneyText}>{rowData.FoodPrice}</Text>
          </View>
        </View>
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
              <Title style={styles.headertitle}>ORDER HISTORY</Title>
            </Body>
            <Right style={styles.right} />
          </Header>
          <View style={styles.MainListBg}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item})=>this._renderRow(item)}
              // enableEmptySections
              // pageSize={4}
              // showsHorizontalScrollIndicator={false}
            />
          </View>
        </Container>
      </View>
    );
  }
}
