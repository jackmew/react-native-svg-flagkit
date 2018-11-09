import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import TestFlagKit from './TestFlagKit'
import { Flag } from 'react-native-svg-flagkit'


export default class App extends Component {
  render() {
    return (
      // <TestFlagKit />
      <View>
        <Flag 
            id={'TW'}
        />
        <Flag 
            id={'US'}
            size={0.2}
        />
        <Flag
            id={'JP'}
            width={100}
            height={100}
        />
      </View>
    );
  }
}

