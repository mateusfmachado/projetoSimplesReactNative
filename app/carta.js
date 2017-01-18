import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
let { width, height } = Dimensions.get('window');

export default class Carta extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>{ this.props.carta.id }</Text>
        <Text>{ this.props.carta.texto }</Text>
        <Text>{
          this.props.carta.escolha ? ("SUCESSO OU FALHA") : null 
        }
        </Text>
      </View>
    );

  }
}