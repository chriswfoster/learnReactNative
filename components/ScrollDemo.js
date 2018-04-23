import React, { Component } from "react"
import { AppRegistry, ScrollView, Image, Text } from "react-native"

export default class ScrollDemo extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.container}>Scroll me plz</Text>

        <Text style={styles.container}>Scrolling down</Text>

        <Text style={styles.container}>What's the best</Text>

        <Text style={styles.container}>Framework around?</Text>

        <Text style={styles.container}>React Native</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    color: "#000",
    backgroundColor: "#fff"
  }
})

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  "AwesomeProject",
  () => IScrolledDownAndWhatHappenedNextShockedMe
)
