import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Profile extends Component {
  render() {
    return(
      <View>
        <Text style={styles.Titulo}>Perfil</Text>
      </View>
      ) 
  }
}
 
  const styles = StyleSheet.create({
    Titulo: {
      // fontSize: 12,
      // fontWeight: '600',
      color: Colors.red,
    },
  });


export default Profile;