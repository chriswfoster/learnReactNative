import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import ImageComp from "./components/ImageComp"
import ColorTest from "./components/ColorTest"
import ScrollDemo from './components/ScrollDemo'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        {/* <ImageComp /> */}
        <ColorTest />
        <ScrollDemo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
})
