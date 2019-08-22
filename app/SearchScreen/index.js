import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  BackHandler,
  Easing
} from "react-native";
import { Header, Body, Left, Right, Content } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import { SearchBar } from "react-native-elements";
import styles from "./style";
import Rating from "react-native-rating";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      searchArray: [
        {
          id: 1,
          search: "Restaurant"
        },
        {
          id: 2,
          search: "Seafood in Da nang city"
        },
        {
          id: 3,
          search: "Craft Burgers"
        }
      ],
      recommandedArray: [
        {
          id: 1,
          itemImg: Images.seafood,
          itemName: "Chicken & Seafood",
          address: "7204 Cronin Station Apt. 678",
          rating: 5,
          review: "238"
        },
        {
          id: 2,
          itemImg: Images.fajitas,
          itemName: "Fajitas & Enchiladas",
          address: "60 Kub Pines Apt. 797",
          rating: 4,
          review: "238"
        },
        {
          id: 3,
          itemImg: Images.seafood,
          itemName: "Chicken & Seafood",
          address: "7204 Cronin Station Apt. 678",
          rating: 5,
          review: "238"
        },
        {
          id: 4,
          itemImg: Images.fajitas,
          itemName: "Fajitas & Enchiladas",
          address: "60 Kub Pines Apt. 797",
          rating: 4,
          review: "238"
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
    this.props.navigation.navigate("AllCategories");
    return true;
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left} />
          <Body style={styles.body}>
            <SearchBar
              containerStyle={{
                backgroundColor: "#F05522",
                ...Platform.select({
                  ios: {
                    borderTopColor: "#F05522",
                    borderBottomColor: "#F05522"
                  },
                  android: {
                    borderBottomColor: "white"
                  }
                })
              }}
              inputContainerStyle={{
                backgroundColor: Colors.white,
                width: Metrics.WIDTH * 0.9
              }}
              inputStyle={{
                color: "#9B9B9B"
              }}
              placeholder="Search for address, food..."
              onChangeText={this.updateSearch}
              value={this.state.search}
              underlineColorAndroid={"transparent"}
            />
          </Body>
          <Right style={styles.right} />
        </Header>

        <View style={{ flex: 1 }}>
          <Content>
            <Text style={styles.titleText}>RECENT SEARCH</Text>
            {this.state.searchArray.map((item, index) => {
              return (
                <View key={index} style={{ paddingHorizontal: 15 }}>
                  <Text style={styles.searchText}>{item.search}</Text>
                </View>
              );
            })}
            <Text
              style={[styles.titleText, { paddingTop: 5, paddingBottom: 0 }]}
            >
              RECOMMENDED FOR YOU
            </Text>

            {this.state.recommandedArray.map((item, index) => {
              return (
                <View key={index} style={styles.recommandedMainRow}>
                  <Image source={item.itemImg} style={styles.itemImg} />

                  <View style={styles.infoMainView}>
                    <Text style={styles.itemName}>{item.itemName}</Text>
                    <Text style={styles.address}>{item.address}</Text>

                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Rating
                        initial={item.rating}
                        onChange={rating => {
                          this.setState({
                            rating: rating
                          });
                        }}
                        selectedStar={Images.seletedstar}
                        unselectedStar={Images.starEmpty1}
                        config={{
                          easing: Easing.inOut(Easing.ease),
                          duration: 350
                        }}
                        starStyle={styles.ratingStar}
                        containerStyle={{
                          flexDirection: "row"
                        }}
                        editable={false}
                      />

                      <Text style={styles.reviewText}>
                        {item.review} reviews
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </Content>
        </View>
      </View>
    );
  }
}
