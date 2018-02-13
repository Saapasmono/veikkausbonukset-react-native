import React, {Component} from 'react';
import { View } from 'react-native';

import {Header, PickContainer, Buttons} from './src/components';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <PickContainer />
        <Buttons />
      </View>
    );
  }
}

