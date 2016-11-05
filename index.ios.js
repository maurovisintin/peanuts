import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen'

export default class Peanuts extends Component {
  render() {
    return (
      <WelcomeScreen />
    );
  }
}

AppRegistry.registerComponent('Peanuts', () => Peanuts);
