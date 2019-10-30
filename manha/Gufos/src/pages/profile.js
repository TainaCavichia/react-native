import React, { Component } from 'react';
import { Text, AsyncStorage, Image, StyleSheet } from 'react-native';
import JwtDecode from 'jwt-decode'

class Profile extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image source={require('../assets/img/profile.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };


  constructor() {
    super();
    this.state = {
      token: null
    }
  }

  //quando eu abrir a tela de perfil, eu quero buscar os dadps do asyncstorage
  componentDidMount() {
    this._buscarDadosDoStorage();
  }

  _buscarDadosDoStorage = async () => {
    try {
      const tokenDoStorage = await AsyncStorage.getItem('@gufos:token');
      if (tokenDoStorage != null) {
        this.setState({ token: tokenDoStorage })
      }
    } catch (error) {
      
    }
  }
  // var decoded = JwtDecode(tokenDoStorage);
  // console.warn(decoded)

  render() {
    return (
      <Text>{this.state.token}</Text>
    );
  }
}

const styles = StyleSheet.create({
  tabBarNavigatorIcon: { width: 25, height: 25, tintColor: 'white' }
});
export default Profile;
