import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput, TouchableOpacity,AsyncStorage} from 'react-native';


class SignIn extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(){
        super();
        this.state = {
            email: 'admin@admin.com',
            senha: null
        }
    }

    _realizarLogin = async() =>{
        // console.warn(this.state.email + ' - ' + this.state.senha)
        fetch('http://192.168.7.85:5000/api/login',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            })
        })
        .then(resposta => resposta.json())
        .then(data => this._irParaHome(data.token))
        .catch(erro => console.warn('AAAAA' + erro))
    }

    _irParaHome = async(tokenRecebido) =>{
        if(tokenRecebido != null){
            try {
                await AsyncStorage.setItem('@gufos:token',tokenRecebido);
                this.props.navigation.navigate("MainNavigator");

            } catch (error) {
                
            }
        }
    }


  render() {
    return(
      <View>
        <TextInput placeholder="email" value={this.state.email}
        onChangeText={email => this.setState({email})}
        />
        
        <TextInput placeholder="senha" 
        onChangeText={senha => this.setState({senha})}
        />

        <TouchableOpacity style={styles.buttonStyle}
        onPress={this._realizarLogin}>
            <Text>Login</Text>
        </TouchableOpacity>

      </View>
      ) 
  }
}



const styles = StyleSheet.create({
    buttonStyle: {
        padding:10,
        backgroundColor: '#00ffff',
        borderRadius:5
      }
});

export default SignIn;