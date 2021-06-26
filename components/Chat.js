import React from "react";
import { View, Text, Button, TextInput, Stylesheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  render() {
    let name = this.props.route.params.name;
    let color = this.props.route.params.color;

    this.props.navigation.setOptions({ title: name });
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        <Button
          title=" GO TO START"
          onPress={() => this.props.navigation.navigate("Start")}
        ></Button>
      </View>
    );
  }
}
