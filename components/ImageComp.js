import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default class ImageComp extends React.Component {
  render() {
    let pic = {
      uri: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
    }
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
