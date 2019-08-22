import React, { Component } from 'react';
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { Fonts, Metrics, Colors, Images } from '../Themes/';
import styles from './styles';

export default class ControlPanel extends Component {

  render() {
    const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg';
    return (
      <Container style={{ width: Metrics.WIDTH * 0.6, backgroundColor: '#ffffff', height: Metrics.HEIGHT}}>

        <View style={styles.profileBody}>
          <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
        </View>

        <Content style={styles.mainview} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.listrow} onPress={() => this.props.navigation.navigate("AboutUs")} >
            <Ionicons name="ios-document" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>About Show</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => this.props.navigation.navigate("Judges")} >
            <Ionicons name="ios-chatbubbles" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Judges</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => this.props.navigation.navigate("Venue")} >
            <Ionicons name="ios-notifications" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Venues</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => this.props.navigation.navigate("Sponsers")} >
            <FontAwesome name="star" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Sponsers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => this.props.navigation.navigate("Notification")} >
            <Entypo name="users" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Notifications</Text>
          </TouchableOpacity>
        </Content>

      </Container>
    )
  }

}
