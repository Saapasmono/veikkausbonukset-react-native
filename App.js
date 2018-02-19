import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/Store';
import {Header, PickContainer, Buttons} from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Header/>
          <PickContainer/>
          <Buttons/>
        </View>
      </Provider>
    );
  }
}

