/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListOfUsers from './components/users/ListOfUsers';
import AnimatedCircle from './components/animation/AnimatedCircle';
import styles from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    if (this.state.isLoading) {
      return <AnimatedCircle />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Users</Text>
        <ListOfUsers />
      </View>
    );
  }
}
