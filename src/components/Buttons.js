import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Buttons = () => {
  return (
    <View style={buttonContainer}>
      <Text style={button}>Buttonit tänne</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
  },
  button: {
    fontWeight: "bold",
    fontSize: 20,
  }
})

const {buttonContainer, button} = styles;


export default Buttons;