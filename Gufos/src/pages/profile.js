import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage, Image } from 'react-native';

import jwt from 'jwt-decode'

class Profile extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('../assets/img/profile.png')}
        style={styles.ImagemIcone} />
    )
  }

  constructor() {
    super();
    this.state = {
      token: '',
      email: ''
    };
  }

  componentDidMount() {
    this._buscarDadosDoStorage()
  }

  _buscarDadosDoStorage = async () => {
    try {
      const tokenDoStorage = await AsyncStorage.getItem('@gufos:token');

      if (tokenDoStorage != null) { 
        this.setState({ token: tokenDoStorage });
        // console.warn(jwt(tokenDoStorage).email)
        this.setState({ email: jwt(tokenDoStorage).email });
      };
    } catch (error) { }
  }

  render() {
    return (
      <View>
        <Text>Email: {this.state.email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Titulo: {
    fontSize: 12,
    fontWeight: '600',
    color: 'red',
  },
  ImagemIcone: { width: 25, height: 25, tintColor: '#00ffff' }

});

export default Profile;