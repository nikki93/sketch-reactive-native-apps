// https://sketch.expo.io/S15Lt3vjg

import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Image source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={s.backgroundImage}>
        <View style={s.overlay}/>
      </Image>
    );
  }
}

const s = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
  }
});
