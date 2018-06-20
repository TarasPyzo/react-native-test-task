import { FlatList, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import usersAPI from '../../api/usersAPI';

export default class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      users: [],
      totalUsers: null,
    };
  }

  componentDidMount() {
    this.request();
  }

  request() {
    const { currentPage } = this.state;

    return usersAPI.getUsers(currentPage).then((responseJson) => {
      this.setState((previousState) => {
        const newState = {
          users: previousState.users.concat(responseJson.data),
          totalUsers: responseJson.total,
        };
        if (previousState.currentPage < responseJson.total_pages) {
          newState.currentPage = previousState.currentPage + 1;
        }

        return newState;
      });
    }).catch(error => console.error(error));
  }

  loadMoreUsers() {
    const { users, totalUsers } = this.state;
    if (users.length === totalUsers) {
      return;
    }

    this.request();
  }

  render() {
    const { users, totalUsers } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => `${index}`}
          onEndReachedThreshold={0}
          onEndReached={() => this.loadMoreUsers()}
          renderItem={({ item, index }) => {
            const user = (
              <View style={styles.userContainer}>
                <Image source={{ uri: item.avatar }} style={styles.userImage} />
                <Text style={styles.userInfo}>{item.first_name} {item.last_name}</Text>
              </View>
            );
            if (index === (totalUsers - 1)) {
              return (
                <View>
                  {user}
                  <Text style={styles.endOfList}>End of List</Text>
                </View>
              );
            }
            return user;
          }}
        />
      </View>
    );
  }
}
