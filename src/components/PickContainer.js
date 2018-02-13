import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const Container = () => {
  return (
    <View style={mainContainer}>
      <Text>Container</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
  }
})

const {mainContainer} = styles;


export default Container;