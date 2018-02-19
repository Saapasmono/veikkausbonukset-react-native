import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  bold: {
    fontWeight: 'bold'
  }
})

const {container, bold} = styles;

const Pick = ({pick_title, pick_link, pubDate, desc}) => {
  return(
    <View style={container}>
      <Text>{pick_title}</Text>
      <Text>{pick_link}</Text>
      <Text>{pubDate}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

export default Pick;