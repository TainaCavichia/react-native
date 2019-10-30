import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class SignIn extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            email: null,
            senha: null,
        };
    }

    _realizarLogin = async () => {
        // console.warn(this.state.email + ' - ' + this.state.senha);
        fetch('http://192.168.7.85:5000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
            //data = token irra :)
            .catch(erro => console.warn('deu ruim' + erro));
    };

    _irParaHome = async (tokenRecebido) => {
        if (tokenRecebido != null) {
            try {
                //salvar essa informação no asyncstorage
                await AsyncStorage.setItem('@gufos:token', tokenRecebido);
                //redirecionar
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {

            }
        }
    };

    render() {
        return (
            <View>
                <TextInput placeholder='email' onChangeText={email => this.setState({ email })}></TextInput>
                <TextInput placeholder='senha' onChangeText={senha => this.setState({ senha })}></TextInput>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignIn;