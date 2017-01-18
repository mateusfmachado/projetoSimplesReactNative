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
      <View>
      {
        this.props.carta.map((carta,idx) => {
          return (
            <View key={idx} style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <Text>{ carta.id }</Text>
              <Text>{ carta.texto }</Text>
              <Text>{
                carta.escolha ? ("SUCESSO OU FALHA") : null 
              }
              </Text>
            </View>
          )
        })
      }
      </View>
    );
  }
}