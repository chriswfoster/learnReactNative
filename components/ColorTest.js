import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default class ColorTest extends React.Component {
  constructor() {
    super()
  }

  tester() {
    console.log("HELLO BILLY")
  }

  render() {
    let pic = {
      uri: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
    }
    return (
      <View style={styles.container} onPress={() => alert("hi")}>
        <Text style={{ color: "red" }}> Testerrrr</Text>
        <Text>MoRE SDF TESXT</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
