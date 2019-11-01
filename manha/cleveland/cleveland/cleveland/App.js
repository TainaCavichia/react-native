import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

class Medicos extends Component {

  constructor() {
    super();
    this.state = {
      medicos: [],
    };
  }

  componentDidMount() {
    this._listarMedicos();
  }

  _listarMedicos = async () => {
    await fetch('http://192.168.4.240:5000/api/medicos')
      .then(resposta => resposta.json())
      .then(data => this.setState({
        medicos: data
      }))
      .catch(erro => console.warn(erro))
  };

  render() {
    return (
      <FlatList
        data={this.state.medicos}
        keyExtractor={item => item.crm}
        renderItem={({ item }) => (
          <View>
            <Text>{item.crm}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.dataNascimento}</Text>
            <Text>{item.ativo}</Text>
            <Text>{item.especialidade}</Text>
          </View>
        )}
      >
      </FlatList>
    );
  }
};

export default Medicos;
