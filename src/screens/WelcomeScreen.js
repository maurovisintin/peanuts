/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Peanuts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          PEANUTS
        </Text>
        <Image style={styles.image} source={require('../assets/Spongebob.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: 'yellow'
  },
  image: {
      marginTop: 50,
      width: 200,
      height: 200
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    fontWeight: '700',
    color: '#00BCD4'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Peanuts', () => Peanuts);
