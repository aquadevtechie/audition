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
  Platform,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";
import styles from "./styles";
import { Content, Icon, Right, Header, Left, Body } from "native-base";
import Entypo from "react-native-vector-icons/Entypo";

import { Images, Metrics, Fonts, Colors } from "../Themes/";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import Rating from "react-native-rating";
import ReadMore from "react-native-read-more-text";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
const GOOGLE_MAPS_APIKEY = "AIzaSyDz3ghh4MuU2XzOnpQZjgrY3hUbaQ15GbE";
import MapViewDirections from "react-native-maps-directions";
import Communications from "react-native-communications";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new FlatList.DataSource({ rowHasChanged });
var Photos = [
  {
    id: 1,
    PhotoImg: Images.Food_Img_three
  },
  {
    id: 2,
    PhotoImg: Images.Food_Img_Ic_three
  },
  {
    id: 3,
    PhotoImg: Images.Food_Img_seven
  },
  {
    id: 4,
    PhotoImg: Images.Food_Img_ic_three
  },
  {
    id: 5,
    PhotoImg: Images.Food_Img_ic_seven
  },
  {
    id: 6,
    PhotoImg: Images.Food_Img_ic_eight
  }
];
var Menu = [
  {
    id: 1,
    FoodImg: Images.Food_Img_seven,
    FoodName: "Cocobolo Poolside Bar + Grill"
  },
  {
    id: 2,
    FoodImg: Images.Food_Img_ic_seven,
    FoodName: "The White Rabbit"
  },
  {
    id: 3,
    FoodImg: Images.Food_Img_ic_eight,
    FoodName: "Burlamacco Ristorante"
  }
];
var Reviews = [
  {
    id: 1,
    ReviewsName: "Ellen McLaughlin",
    ReviewsImg: Images.Reviews_one,
    ReviewsHours: "2 hours ago",
    rating: 4,
    ReviewDes:
      "So wc needed up ordering the deep fried salmon roll with Chinese hot mustard and wasabi noodles with salmon."
  },
  {
    id: 2,
    ReviewsName: "Vincent King",
    ReviewsImg: Images.reviews_two,
    ReviewsHours: "3 hours ago",
    rating: 5,
    ReviewDes:
      "We been there yesterday for dinner,ordered tandoori Lobster and mutton galouti and few mains and biryani"
  }
];

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: Photos,
      dataSourceTwo: Menu,
      dataSourceThree: Reviews,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("SearchResultOne");
    return true;
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  /* PHOTO RENDER ROW START */
  _renderRow(rowData) {
    var that = this;

    return (
      <View style={styles.mainRenderView}>
        <Image source={rowData.PhotoImg} style={styles.PhotoImg} />
      </View>
    );
  }
  /*PHOTO RENDER ROW END */

  /* MENU RENDER ROW START */

  _renderRowTwo(rowData) {
    var that = this;

    return (
      <View>
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

  /*MENU RENDER ROW END */

  /* REVIEWS RENDER ROW START */

  _renderRowThree(rowData) {
    var that = this;

    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Image source={rowData.ReviewsImg} style={styles.ReviewsImg} />
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.ReviewsName}>{rowData.ReviewsName}</Text>
              <View
                style={{
                  marginTop: Metrics.HEIGHT * 0.02
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
              </View>
            </View>
            <Text style={styles.ReviewsHours}>{rowData.ReviewsHours}</Text>
            <Text style={styles.ReviewDes}>{rowData.ReviewDes}</Text>
          </View>
        </View>
        <View style={styles.HorizontalLine} />
      </View>
    );
  }

  /*REVIEWS RENDER ROW END */

  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.viewmore} onPress={handlePress}>
        View more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.viewmore} onPress={handlePress}>
        View less
      </Text>
    );
  };

  renderNavigation = () => {
    this.props.navigation.navigate("SearchResultOne");
  };

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainview}>
        <View style={styles.mainContentView}>
          <ScrollView>
            <View style={styles.swiperMainView}>
              <Swiper
                style={styles.wrapper}
                dot=<View style={styles.dot} />
                activeDot=<View style={styles.activeDot} />
              >
                <View style={styles.slide1}>
                  <ImageBackground
                    source={Images.Food_Img_five}
                    style={styles.SwiperImg}
                  >
                    <Header
                      androidStatusBarColor={"transparent"}
                      style={styles.header}
                    >
                      <Left style={styles.left}>
                        <TouchableOpacity
                          style={styles.backArrow}
                          onPress={() =>
                            this.props.navigation.navigate("SearchResultOne")
                          }
                        >
                          <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={35}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </TouchableOpacity>
                      </Left>

                      <Body style={styles.body} />

                      <Right>
                        <View style={{ flexDirection: "row" }}>
                          <Foundation
                            name="share"
                            size={20}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                          <AntDesign
                            name="heart"
                            size={20}
                            color="#ffffff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </View>
                      </Right>
                    </Header>
                  </ImageBackground>
                </View>
                <View style={styles.slide1}>
                  <ImageBackground
                    source={Images.Food_Img_ic_two}
                    style={styles.SwiperImg}
                  >
                    <Header
                      androidStatusBarColor={"transparent"}
                      style={styles.header}
                    >
                      <Left style={styles.left}>
                        <TouchableOpacity
                          style={styles.backArrow}
                          onPress={() =>
                            this.props.navigation.navigate("SearchResultOne")
                          }
                        >
                          <MaterialIcons
                            name="keyboard-backspace"
                            size={35}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </TouchableOpacity>
                      </Left>

                      <Body style={styles.body} />

                      <Right>
                        <View style={{ flexDirection: "row" }}>
                          <Foundation
                            name="share"
                            size={20}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                          <AntDesign
                            name="heart"
                            size={20}
                            color="#ffffff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </View>
                      </Right>
                    </Header>
                  </ImageBackground>
                </View>
                <View style={styles.slide1}>
                  <ImageBackground
                    source={Images.Food_Img_ten}
                    style={styles.SwiperImg}
                  >
                    <Header
                      androidStatusBarColor={"transparent"}
                      style={styles.header}
                    >
                      <Left style={styles.left}>
                        <TouchableOpacity
                          style={styles.backArrow}
                          onPress={() =>
                            this.props.navigation.navigate("SearchResultOne")
                          }
                        >
                          <MaterialIcons
                            name="keyboard-backspace"
                            size={35}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </TouchableOpacity>
                      </Left>

                      <Body style={styles.body} />

                      <Right>
                        <View style={{ flexDirection: "row" }}>
                          <Foundation
                            name="share"
                            size={20}
                            color="#fff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                          <AntDesign
                            name="heart"
                            size={20}
                            color="#ffffff"
                            style={{
                              alignSelf: "center",
                              marginLeft: Metrics.HEIGHT * 0.01
                            }}
                          />
                        </View>
                      </Right>
                    </Header>
                  </ImageBackground>
                </View>
              </Swiper>
            </View>
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={styles.FoodDetailsText}>
                Cocobolo Poolside Bar + Grill
              </Text>
              <Text style={styles.FoodANameText}>60 Kub Pines Apt.797</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: Metrics.HEIGHT * 0.01,
                  marginBottom: Metrics.HEIGHT * 0.01
                }}
              >
                <Rating
                  initial={3}
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
            <View style={styles.borderHorizontal} />
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  marginBottom: Metrics.HEIGHT * 0.02
                }}
              >
                <Text style={styles.OPENInText}>OPEN IN</Text>
                <Text style={styles.TimeText}>10:00 - 23:00</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => Communications.phonecall("1234567890", true)}
                >
                  <FontAwesome
                    name="phone"
                    size={20}
                    color="#000000"
                    style={{ alignSelf: "center" }}
                  />
                  <Text style={styles.ContactText}>Contact</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.PhotoMainView}>
              <Text style={styles.OPENInText}>PHOTOS</Text>
              <FlatList
                data={this.state.dataSource}
                renderItem={({item})=>this._renderRow(item)}
                // enableEmptySections
                // pageSize={4}
                // horizontal={true}
                // showsHorizontalScrollIndicator={false}
              />
            </View>

            {/*<Image source={Images.MapView} style={styles.MapView} />*/}

            <MapView
              style={styles.MapView}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: 22.564518,
                longitude: 72.928871,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }}
              initialRegion={{
                latitude: 22.564518,
                longitude: 72.928871,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 22.564518,
                  longitude: 72.928871,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
              >
                <Entypo name="location-pin" size={35} color="#f05522" />
              </MapView.Marker>
              <MapView.Marker
                coordinate={{
                  latitude: 22.56381,
                  longitude: 72.914352,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
              >
                <View
                  style={{
                    backgroundColor: "black",
                    height: Metrics.HEIGHT * 0.03,
                    width: Metrics.HEIGHT * 0.03,
                    borderRadius: Metrics.HEIGHT * 0.03,
                    alignSelf: "center",
                    justifyContent: "center"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      height: Metrics.HEIGHT * 0.014,
                      width: Metrics.HEIGHT * 0.014,
                      borderRadius: Metrics.HEIGHT * 0.007,
                      alignSelf: "center",
                      justifyContent: "center"
                    }}
                  />
                </View>
              </MapView.Marker>

              <MapViewDirections
                origin={{
                  latitude: 22.564518,
                  longitude: 72.928871,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
                destination={{
                  latitude: 22.56381,
                  longitude: 72.914352,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="#f05522"
              />

              <MapView.Circle
                center={{ latitude: 22.564518, longitude: 72.928871 }}
                radius={600}
                strokeWidth={0}
                strokeColor={"transparent"}
                fillColor={"#ebdacd"}
              />
            </MapView>
            <View style={styles.DesMainView}>
              <Text style={styles.OPENInText}>DESCRIPTION</Text>
              <View style={styles.desc}>
                <ReadMore
                  numberOfLines={8}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <Text style={styles.descTxt}>
                    There's nothing quite like an outdoor grilling party.The
                    sounds of splashing in the pool just seem to harmonize with
                    the sizzling of the grill.And if the scent of flame-kissed
                    steaks getting its caramelized char from the grill doesn't
                    get your mouth watering,few things will ! This is the
                    concept behind Cocobolo at Park Hotel where instant summer
                    pool parties are a daily affair from its lively outdoor
                    grill and bar.
                  </Text>
                </ReadMore>
              </View>
            </View>

            <View style={styles.MenuMainView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={styles.OPENInText}>MENU</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AllCategories")
                  }
                >
                  <Text style={styles.SeeAllCatText}>See all categories</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.dataSourceTwo}
                renderItem={({item})=>this._renderRowTwo(item)}
                // enableEmptySections
                // pageSize={4}
                // showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.Viewmore}>View more</Text>
            </View>

            <View style={styles.ReviewsMainView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={styles.OPENInText}>REVIEWS</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Reviews")}
                >
                  <Text style={styles.SeeAllCatText}>See all reviews</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.dataSourceThree}
                renderItem={({item})=>this._renderRowThree(item)}
                // enableEmptySections
                // pageSize={4}
                // showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.BookTableMainBg}
          onPress={() => this.props.navigation.navigate("BookTable")}
        >
          <Text style={styles.BookTableText}>BOOK A TABLE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
