import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  FlatList
} from "react-native";
import { Content, Header, Left, Right, Body, Title } from "native-base";
import { Metrics, Fonts, Colors, Images } from "../Themes";
import styles from "./style";
import Modal from "react-native-modal";
import Calendar from "../components/Calendar/CalendarStrip.js";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds = new FlatList.DataSource({ rowHasChanged });

var timeArray = [
  {
    id: 1,
    time: "10:00"
  },
  {
    id: 2,
    time: "10:15"
  },
  {
    id: 3,
    time: "10:30"
  },
  {
    id: 4,
    time: "10:45"
  },
  {
    id: 5,
    time: "11:00"
  },
  {
    id: 6,
    time: "11:15"
  },
  {
    id: 7,
    time: "11:30"
  },
  {
    id: 8,
    time: "11:45"
  },
  {
    id: 9,
    time: "12:00"
  },
  {
    id: 10,
    time: "13:00"
  },
  {
    id: 11,
    time: "13:15"
  },
  {
    id: 12,
    time: "13:30"
  },
  {
    id: 13,
    time: "13:45"
  },
  {
    id: 14,
    time: "14:00"
  },
  {
    id: 15,
    time: "14:15"
  },
  {
    id: 16,
    time: "14:30"
  },
  {
    id: 17,
    time: "14:45"
  },
  {
    id: 18,
    time: "15:00"
  },
  {
    id: 19,
    time: "15:15"
  },
  {
    id: 20,
    time: "15:30"
  },
  {
    id: 21,
    time: "15:45"
  },
  {
    id: 22,
    time: "16:00"
  },
  {
    id: 23,
    time: "16:15"
  },
  {
    id: 24,
    time: "16:30"
  },
  {
    id: 25,
    time: "16:45"
  },
  {
    id: 26,
    time: "17:00"
  },
  {
    id: 27,
    time: "17:15"
  },
  {
    id: 28,
    time: "17:30"
  },
  {
    id: 29,
    time: "17:45"
  },
  {
    id: 30,
    time: "18:00"
  },
  {
    id: 31,
    time: "18:15"
  },
  {
    id: 32,
    time: "18:30"
  },
  {
    id: 33,
    time: "18:45"
  },
  {
    id: 34,
    time: "19:00"
  },
  {
    id: 35,
    time: "19:15"
  },
  {
    id: 36,
    time: "19:30"
  },
  {
    id: 37,
    time: "19:45"
  },
  {
    id: 38,
    time: "20:00"
  }
];

export default class BookTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: timeArray,
      selectedLots: 1,
      selectedMenu: [],
      isModalVisible: false,
      menuArray: [
        {
          id: 1,
          itemImg: Images.Photos_one,
          itemName: "Cocobolo Poolside Bar + Grill",
          itemPrice: "$ 50.00",
          addOrNot: false
        },
        {
          id: 2,
          itemImg: Images.Food_two,
          itemName: "The White Rabbit",
          itemPrice: "$ 45.00",
          addOrNot: false
        },
        {
          id: 3,
          itemImg: Images.Photos_three,
          itemName: "Burlamacco Ristorante",
          itemPrice: "$ 29.00",
          addOrNot: false
        },
        {
          id: 4,
          itemImg: Images.Photos_one,
          itemName: "Cocobolo Poolside Bar + Grill",
          itemPrice: "$ 50.00",
          addOrNot: false
        },
        {
          id: 5,
          itemImg: Images.Food_two,
          itemName: "The White Rabbit",
          itemPrice: "$ 45.00",
          addOrNot: false
        },
        {
          id: 6,
          itemImg: Images.Photos_three,
          itemName: "Burlamacco Ristorante",
          itemPrice: "$ 29.00",
          addOrNot: false
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
    this.props.navigation.navigate("ProductDetails");
    return true;
  };

  renderRow(rowData) {
    return (
      <View style={styles.timeMainRow}>
        <TouchableOpacity onPress={() => this.selectTime(rowData.id)}>
          {this.state.selectedLots == rowData.id ? (
            <Text style={styles.timeSelectedText}>{rowData.time}</Text>
          ) : (
            <Text style={styles.timeUnselectedText}>{rowData.time}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  selectTime(id) {
    this.setState({
      selectedLots: id,
      dataSource:timeArray
    });
  }

  selectedItem(id) {
    console.log("Selected Menu Item");
    console.log(id);

    const temp = this.state.selectedMenu;

    if (temp.includes(id)) {
      temp.splice(temp.indexOf(id), 1);
    } else {
      temp.push(id);
    }

    this.setState({
      selectedMenu: temp
    });

    console.log("Selected Menu array");
    console.log(this.state.selectedMenu);
  }

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={styles.mainView}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.backPressed()}>
              <AntDesign name="close" color="#000000" size={30} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.headertitle}>BOOK A TABLE</Title>
          </Body>
          <Right style={styles.right} />
        </Header>

        <View style={styles.contentView}>
          <Content>
            <Calendar
              calendarAnimation={{ type: "sequence", duration: 30 }}
              daySelectionAnimation={{
                type: "background",
                duration: 200,
                backgroundColor: "#F05522"
              }}
              style={{ height: 100 }}
              calendarHeaderStyle={{ color: "#000000" }}
              calendarColor={"#F5F5F5"}
              dateNumberStyle={{ color: "#000000" }}
              dateNameStyle={{ color: "#000000" }}
              highlightDateNumberStyle={{ color: "white" }}
              highlightDateNameStyle={{ color: "#000000" }}
              disabledDateNameStyle={{ color: "grey" }}
              disabledDateNumberStyle={{ color: "grey" }}
              iconLeft={require("../components/Calendar/img/left-arrow-black.png")}
              iconRight={require("../components/Calendar/img/right-arrow-black.png")}
              iconContainer={{ flex: 0.1 }}
              minDate={new Date()}
            />

            <View
              style={{
                width: Metrics.WIDTH
              }}
            >
              <FlatList
                data={this.state.dataSource}
                renderItem={({item})=>this.renderRow(item)}
                // enableEmptySections
                // pageSize={4}
                // horizontal={true}
                // showsHorizontalScrollIndicator={false}
              />
            </View>

            <View style={styles.orderingMainView}>
              <Text style={styles.orderingText}>ORDERING</Text>
              <View style={styles.personMainView}>
                <Text style={styles.numPersonText}>Number of person</Text>
                <Text style={styles.personText}>2 Adults, 3 Children</Text>
                <Entypo name="chevron-small-right" size={25} color="#C2C4CA" />
              </View>
            </View>

            <View
              style={[
                styles.orderingMainView,
                { marginTop: 15, marginBottom: 15 }
              ]}
            >
              <Text style={styles.orderingText}>MENU</Text>

              {this.state.menuArray.map((item, index) => {
                return (
                  <View key={index}>
                    <View style={styles.menuMainRow}>
                      <Image source={item.itemImg} style={styles.menuImg} />
                      <View style={styles.menuTextView}>
                        <Text style={styles.itemText}>{item.itemName}</Text>
                        <Text style={styles.itemPrice}>{item.itemPrice}</Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: Metrics.WIDTH * 0.13
                        }}
                        onPress={() => this.selectedItem(item.id)}
                      >
                        {this.state.selectedMenu.includes(item.id) == false ? (
                          <Ionicons
                            name="ios-add-circle-outline"
                            size={35}
                            color="#F05522"
                            style={{ alignSelf: "flex-end" }}
                          />
                        ) : (
                          <MaterialIcons
                            name="check-circle"
                            size={35}
                            color="#F05522"
                            style={{ alignSelf: "flex-end" }}
                          />
                        )}

                        {/*!item.addOrNot ? (
                          <Ionicons
                            name="ios-add-circle-outline"
                            size={35}
                            color="#F05522"
                            style={{ alignSelf: "flex-end" }}
                          />
                        ) : (
                          <MaterialIcons
                            name="check-circle"
                            size={35}
                            color="#F05522"
                            style={{ alignSelf: "flex-end" }}
                          />
                        )*/}
                      </TouchableOpacity>
                    </View>

                    <View style={{ height: 1, backgroundColor: "#F5F5F5" }} />
                  </View>
                );
              })}
            </View>
          </Content>
        </View>

        <View style={styles.bottomMainView}>
          <Text style={styles.bottomText}>TOTAL: $ 312.00</Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => {
              this._showModal();
            }}
          >
            <Text style={styles.bottomText}>ORDER</Text>
            <AntDesign
              name="arrowright"
              size={25}
              color="#FFFFFF"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>

        <Modal
          style={{ alignItems: "center", justifyContent: "center" }}
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this._hideModal()}
        >
          <View style={styles.modalView}>
            <Image source={Images.delivery_boy} style={styles.deliveryBoyImg} />

            <Text style={styles.thankYouText}>Thank You !</Text>

            <Text style={styles.successMsg}>Your order is successfully.</Text>

            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#F05522",
                borderRadius: 5,
                paddingVertical: 8,
                paddingHorizontal: Metrics.WIDTH * 0.15
              }}
              onPress={() => this._hideModal()}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
