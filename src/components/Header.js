import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '../Utils/logo.png';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Image
        source={require('../Utils/logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 25,
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: '#76b729'
  }
})

const {headerContainer} = styles;

export default Header;