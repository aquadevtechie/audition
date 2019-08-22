import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
	Platform,
	TouchableOpacity,
	BackHandler,
	I18nManager,
	AsyncStorage
} from 'react-native';
import {
	Container,
	Button,
	Right,
	Left,
	ListItem,
	Content,
	Body,
	Header,
} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../Themes/';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          LoadingTrue: false
        };
      }

      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backPressed);
        }
      
        backPressed = () => {
            Alert.alert(
                "Quit App?",
                "Are you sure you want to exit App?",
                [
                  { text: "Yes", onPress: () => BackHandler.exitApp() },
                  { text: "No", onPress: () => true }
                ],
                { cancelable: true }
              );
              return true;
          };
        

}