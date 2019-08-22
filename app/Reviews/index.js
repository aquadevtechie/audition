import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Platform,
  Easing,
  ScrollView
} from "react-native";
import { Container, Icon, Right, Header, Left, Title, Body } from "native-base";
import styles from "./styles";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Rating from "react-native-rating";

var ReviewsData = [
  {
    id: 1,
    ReviewsName: "Ellen McLaughlin",
    ReviewsImg: Images.Reviews_one,
    ReviewsHours: "2 hours ago",
    rating: 4,
    ReviewDes:
      "So we needed up ordering the deep fried salmon roll with Chinese hot mustard and wasabi noodles with salmon.",
    FoodMenu: []
  },
  {
    id: 2,
    ReviewsName: "Vincent King",
    ReviewsImg: Images.reviews_two,
    ReviewsHours: "3 hours ago",
    rating: 5,
    ReviewDes:
      "We been there yesterday for dinner,ordered tandoori Lobster and mutton galouti and few mains and biryani",
    FoodMenu: [
      {
        id: 10,
        PhotoImg: Images.Photos_one
      },
      {
        id: 20,
        PhotoImg: Images.Photos_two
      },
      {
        id: 30,
        PhotoImg: Images.Photos_three
      },
      {
        id: 40,
        PhotoImg: Images.Photos_four
      }
    ]
  },
  {
    id: 3,
    ReviewsName: "Francisco Lowe",
    ReviewsImg: Images.Reviews_one,
    ReviewsHours: "2 days ago",
    rating: 5,
    ReviewDes:
      " I was there for sister birthday party,I have been here for first time,very impressed with overall experience.great food, service and ambience was excellent.",
    FoodMenu: []
  },
  {
    id: 4,
    ReviewsName: " McLaughlin",
    ReviewsImg: Images.ProfileUserImg,
    ReviewsHours: "4 hours ago",
    rating: 4,
    ReviewDes:
      "So we needed up ordering the deep fried salmon roll with Chinese hot mustard and wasabi noodles with salmon.",
    FoodMenu: []
  }
];

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Title style={styles.headertitle}>REVIEWS</Title>
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
          <View>
            <Text style={styles.ReviewsText}>25 REVIEWS</Text>

            <View style={styles.mainListBg}>
              <ScrollView>
                {ReviewsData.map((item, index) => {
                  return (
                    <View>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={item.ReviewsImg}
                          style={styles.ReviewsImg}
                        />
                        <View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between"
                            }}
                          >
                            <Text style={styles.ReviewsName}>
                              {item.ReviewsName}
                            </Text>
                            <View
                              style={{
                                marginTop: Metrics.HEIGHT * 0.02
                              }}
                            >
                              <Rating
                                initial={item.rating}
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
                          <Text style={styles.ReviewsHours}>
                            {item.ReviewsHours}
                          </Text>
                          <Text style={styles.ReviewDes}>{item.ReviewDes}</Text>
                        </View>
                      </View>

                      <View style={styles.MainBgFoodMenu}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          style={styles.postImageContent}
                        >
                          {item.FoodMenu.map((itemImage, index) => {
                            return (
                              <View style={styles.mainRenderView} key={index}>
                                <Image
                                  source={itemImage.PhotoImg}
                                  style={styles.PhotoImg}
                                />
                              </View>
                            );
                          })}
                        </ScrollView>
                      </View>
                      <View style={styles.HorizontalLine} />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Container>
      </View>
    );
  }
}
