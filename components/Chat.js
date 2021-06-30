import React from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

import { 
  View, 
  Text, 
  Button, 
  TextInput, 
  Stylesheet, 
  KeyboardAvoidingView, 
  Platform } 
from "react-native";

const firebase = require("firebase");
require("firebase/firestore");


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: {
        _id: '',
        name: '',
        avatar: ''
      },
      uid: 0,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyB93Zc-dDBPa3-77w4oHD29aegEIhNsbjY",
        authDomain: "chat-app-504a2.firebaseapp.com",
        projectId: "chat-app-504a2",
        storageBucket: "chat-app-504a2.appspot.com",
        messagingSenderId: "942341845494",
        appId: "1:942341845494:web:126ea6eec7b24b278fd7d7",
        measurementId: "G-5F8TZGS4SS"
      });
    }

    this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  componentDidMount() {
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }

      this.setState({
        uid: user.uid,
        messages: [],
      });

      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });

    this.setState({
      messages,
    });
  };

  // onSend(messages = []) {
  //   this.setState((previousState) => ({
  //     messages: GiftedChat.append(previousState.messages, messages),
  //   }));
  // }
  addMessage() {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
  }
  onSend(messages = []) {
    this.setState(
      (previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
      () => {
        this.addMessage();
      }
    );
  }

  renderBubble(props){
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000",
        },
      }}
      />
    );
  }

  render() {
    let name = this.props.route.params.name;
    let backgroundColor = this.props.route.params.backgroundColor;

    this.props.navigation.setOptions({ title: name });
    return (
<View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
        }}
      >        
      <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
         }
        <Button
          title=" GO TO START"
          onPress={() => this.props.navigation.navigate("Start")}
        ></Button>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   textContainer: {
//     flex: 1,
//   },
// })


    // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: "center",
      //     alignItems: "center",
      //     backgroundColor: color,
      //   }}
      // >
        
      // </View>