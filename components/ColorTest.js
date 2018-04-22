import React from "react"
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native"

export default class ColorTest extends React.Component {
  constructor() {
    super()
    this.state = {
      texttyped: ""
    }
  }

  tester() {
    console.log("HELLO BILLY")
  }

  render() {
    let pic = {
      uri: "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg"
    }
    return (
      <View style={styles.container}>
        <Button
          onPress={() => alert("hi")}
          title="Test 5000"
          style={styles.childCompnents}
        />
        <Text style={styles.textComponents}>{this.state.texttyped}</Text>
        <TextInput
          placeholder="Type something here"
          style={styles.inputComponents}
          onChangeText={text => this.setState({ texttyped: text })}
        />
        <Text style={styles.textComponents}>{this.state.texttyped}</Text>
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
  },
  textComponents: {
    height: 300,
    backgroundColor: "#fff",
    color: "red"
  },
  inputComponents: {
    width: 300,
    height: 30,
    backgroundColor: "#fff",
    color: "#000"
  }
})
