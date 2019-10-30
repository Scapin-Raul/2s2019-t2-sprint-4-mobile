import React, {Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class Main extends Component {
  
  static navigationOptions={
    tabBarIcon: ()=>(
      <Image source={require('../assets/img/calendar.png')}
      style={styles.ImagemIcone}/>
    )
  }

  constructor() {
    super();
    this.state = {
      eventos: [],
    };
  }

  componentDidMount() {
    this._carregarEventos();
  }

  _carregarEventos = async () => {
    await fetch('http://192.168.7.85:5000/api/eventos')
      .then(resposta => resposta.json())
      .then(data => this.setState({eventos: data}))
      .catch(erro => console.warn(erro));
  };

  render() {
    return (
      <FlatList
        data={this.state.eventos}
        keyExtractor={item => item.idEvento}
        renderItem={({item}) => (
          <View>
            <Text style={styles.Titulo}>{item.titulo}</Text>
            <Text style={styles.red}>{item.dataEvento}</Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  Titulo: {
    fontSize: 12,
    fontWeight: '600',
    color: 'blue',
  },
  red: 
  {
    color: 'red',
  },
  ImagemIcone:{width:25,height:25, tintColor: '#00ffff'}
});


export default Main;
