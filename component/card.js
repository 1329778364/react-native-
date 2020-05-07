import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sec: 100ds};
  }
  Add() {
    this.setState(state => {
      sec: state.sec + 1;
    });
  }
  componentDidCatch() {
    this.interval = setInterval(() => {
      this.Add();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <Text>section:{this.state.sec}</Text>;
  }
}

export default Card;
