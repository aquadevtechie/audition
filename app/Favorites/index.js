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

import { Images, Metrics, Fonts, Colors } from "../Themes/";

import AntDesign from "react-native-vector-icons/AntDesign";

import Rating from "react-native-rating";

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new FlatList.DataSource({ rowHasChanged });

var FoodDetails = [
  {
    id: 1,
    Foodimg: Images.Food_Img_six,
    rating: 4,
    FoodName: "Filet CarpetBagger"
  },
  {
    id: 2,
    Foodimg: Images.Food_Img_seven,
    rating: 4,
    FoodName: "Lamb Burger"
  },
  {
    id: 3,
    Foodimg: Images.Food_Img_eight,
    rating: 4,
    FoodName: "Oysters"
  },
  {
    id: 4,
    Foodimg: Images.Food_Img_Nine,
    rating: 4,
    FoodName: "QuailDish"
  },
  {
    id: 5,
    Foodimg: Images.Food_Img_ten,
    rating: 4,
    FoodName: "Shrimp Cocktail"
  }
];

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: FoodDetails,
      review: ""
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

  _renderDeleteItem(index) {
    var newData = FoodDetails.slice(); //copy array
    newData.splice(index, 1); //remove element
    for (var i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }

    FoodDetails = newData;
    this.setState({ dataSource: FoodDetails });
  }

  _renderRow = rowData => {
    var that = this;

    return (
      <View style={styles.mainListRenderRow}>
        <View style={styles.Foodimg}>
          <Image source={rowData.Foodimg} style={styles.Foodimg} />

          <TouchableOpacity
            onPress={() => this._renderDeleteItem(rowData.index)}
            style={styles.hearticon}
            underlayColor="transparent"
          >
            <AntDesign
              name="heart"
              size={25}
              color="#f05522"
              style={{ alignSelf: "flex-end", top: 5, right: 10 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.FoodDetailsText}>{rowData.FoodName}</Text>
          <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01
            }}
          >
            <Rating
              initial={rowData.rating}
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
        </TouchableOpacity>
      </View>
    );
  };

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
              <Title style={styles.headertitle}>FAVORITES</Title>
            </Body>
            <Right style={styles.right} />
          </Header>
          <View style={styles.MainListBg}>
            <FlatList
              contentContainerStyle={styles.listContent}
              data={this.state.dataSource}
              renderItem={({item})=>this._renderRow(item)}
              // enableEmptySections
              // pageSize={4}
            />
          </View>
        </Container>
      </View>
    );
  }
}
