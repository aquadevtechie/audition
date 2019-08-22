import React, { Component } from 'react';
import Router from './app/navigation/navigation';
import {AppRegistry} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('newaud', () => App)