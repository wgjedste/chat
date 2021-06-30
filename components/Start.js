import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  Platform,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = require("../assets/Background-Image.png");

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      backgroundColor: "",
    };
  }

  onPressChat = (name, backgroundColor) => {
    if (name == "") {
      console.log(name);
      return Alert.alert('Please Enter a Name .');
    }
    this.props.navigation.navigate("Chat", {
      name: `${name}`,
      backgroundColor: `${backgroundColor}`,
    });
  };

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to the Chat App!</Text>
          </View>
          <View style={styles.box1}>
            <View style={styles.nameBox}>
            <TextInput style={styles.inputname}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeHolder='choose a name.'
          >
          </TextInput>
            </View>
            <View style={styles.backColorTextBox}>
              <Text style={styles.backColorText}>Choose Background Color:</Text>
            </View>
            <View style={styles.backColorContainer}>
            <TouchableOpacity accessible={true}
                accessibilityLabel="More options"
                accessibilityHint="Lets you choose the color chatinterface."
                onPress={() => this.setState({ backgroundColor: "#090C08" })}
                style={styles.chatButton1}>
              </TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="More options"
                accessibilityHint="Lets you choose the color chatinterface."
                onPress={() => this.setState({ backgroundColor: "#474056" })}
                style={[styles.chatButton1, styles.chatButton2]}>
              </TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="More options"
                accessibilityHint="Lets you choose the color chatinterface."
                onPress={() => this.setState({ backgroundColor: "#8A95A5" })}
                style={[styles.chatButton1, styles.chatButton3]}>
              </TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="More options"
                accessibilityHint="Lets you choose the color chatinterface."
                onPress={() => this.setState({ backgroundColor: "#B9C6AE" })}
                style={[styles.chatButton1, styles.chatButton4]}></TouchableOpacity>
            </View>
          </View>


          <TouchableOpacity
            accessible={true}
            accessibilityLabel='Start Chatting'
            accessibilityHint='Let you start chatting'
            style={styles.chatbutton}
            onPress={() => this.onPressChat(this.state.name, this.state.backgroundColor)}
          >
            <Text style={styles.chatbuttontext}>Start Chatting</Text>
          </TouchableOpacity>



          {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
        }


        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    flex: 0.75,
    flexDirection: "column",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  box1: {
    flexDirection: "column",
    position: "relative",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    height: "44%",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },
  nameBox: {
    flexDirection: "column",
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#757083",
  },
  inputname: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 50,
    width: "100%",
    height: 50,
    marginBottom: "auto",
  },
  backColorTextBox: {
    flexDirection: "row",
    position: "relative",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
  },
  backColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  backColorContainer: {
    flexDirection: "row",
    position: "relative",
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
  },
  chatButton1: {
    backgroundColor: "#090C08",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  chatButton2: {
    backgroundColor: "#474056",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  chatButton3: {
    backgroundColor: "#8A95A5",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  chatButton4: {
    backgroundColor: "#B9C6AE",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  chatbutton: {
    backgroundColor: "#757083",
    flexDirection: "column",
    position: "relative",
    marginRight: "auto",
    marginLeft: "auto",
    width: "88%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});