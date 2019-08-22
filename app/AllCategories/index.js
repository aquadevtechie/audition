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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../components/react-native-scrollable-tab-view";

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new FlatList.DataSource({ rowHasChanged });

var AllCategoriesData = [
  {
    id: 1,
    FoodImg: Images.Food_Img_two,
    FoodName: "Cheesecake"
  },
  {
    id: 2,
    FoodImg: Images.Food_Img_four,
    FoodName: "Cocktail"
  },
  {
    id: 3,
    FoodImg: Images.Food_Img_ic_two,
    FoodName: "Stuffed Trout"
  },
  {
    id: 4,
    FoodImg: Images.Food_Img_ic_five,
    FoodName: "cafeannie"
  },
  {
    id: 5,
    FoodImg: Images.Food_Img_ic_eight,
    FoodName: "Stuffed Trout"
  },
  {
    id: 6,
    FoodImg: Images.Food_Img_ic_nine,
    FoodName: "perrys"
  },
  {
    id: 7,
    FoodImg: Images.Food_Img_ic_one,
    FoodName: "SteakSalad"
  },
  {
    id: 8,
    FoodImg: Images.Food_Img_three,
    FoodName: "Chocolate Cake"
  }
];

export default class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: AllCategoriesData
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("ProductDetails");
    return true;
  };

  _renderRow(rowData) {
    var that = this;

    return (
      <View style={styles.MainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={rowData.FoodImg} style={styles.FoodImg} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="currency-usd"
                color="#c2c4ca"
                size={20}
              />
              <Text style={styles.MoneyText}>50.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalBorder} />
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductDetails")}
              >
                <View>
                  <MaterialCommunityIcons
                    name="keyboard-backspace"
                    size={35}
                    color="#fff"
                    style={{
                      alignSelf: "center"
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>ALL CATEGORIES</Title>
            </Body>
            <Right style={styles.right}>
              <AntDesign
                name="search1"
                size={20}
                color="#fff"
                style={{
                  alignSelf: "center"
                }}
              />
            </Right>
          </Header>

          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.tabUnderLine}
            tabBarBackgroundColor={"#fff"}
            tabBarActiveTextColor={"#262628"}
            tabBarInactiveTextColor={"#c2c4ca"}
            tabBarTextStyle={styles.tabText}
            style={{
              backgroundColor: "transparent",
              marginTop: Metrics.HEIGHT * 0.02
            }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <View tabLabel="STARTERS">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({item})=>this._renderRow(item)}
                      // enableEmptySections
                      // pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="MAINS">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({item})=>this._renderRow(item)}
                      // enableEmptySections
                      // pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="SIDES">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({item})=>this._renderRow(item)}
                      // enableEmptySections
                      // pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View tabLabel="DESSERT">
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  height: Metrics.HEIGHT * 0.9
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: Metrics.HEIGHT * 0.025,
                      height: Metrics.HEIGHT * 0.78
                    }}
                  >
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({item})=>this._renderRow(item)}
                      // enableEmptySections
                      // pageSize={4}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollableTabView>
        </Container>
      </View>
    );
  }
}
