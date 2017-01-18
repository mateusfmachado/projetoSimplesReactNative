import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
let { width, height } = Dimensions.get('window');
import {Actions} from 'react-native-router-flux'


export default class projetoTeste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartas: [ 
        { id: "a1", texto: "asdd", escolha: true },
        { id: "a2", texto: "sokx", escolha: false }
      ],
      descarte: [

      ]
    };
  }

  retirarCarta() {
    let cartas = this.state.cartas.slice();
    if(cartas.length <1) return;
    const carta = cartas.pop();
    let descarte = this.state.descarte.slice();
    descarte.push(carta);
    this.setState({cartas: cartas, descarte: descarte});
    Actions.carta({carta});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <View style={{width: width/1.2, height: width/1.2}}>
          < TouchableOpacity style={{borderWidth: 2, padding: 5}} onPress={ () => this.retirarCarta() }>
            <Text>Retirar Carta</Text>
          </ TouchableOpacity>
          < TouchableOpacity style={{borderWidth: 2, padding: 5}} onPress={ () => alert(JSON.stringify(this.state.cartas)) }>
            <Text>Cartas Restantes</Text>
          </ TouchableOpacity>
          < TouchableOpacity style={{borderWidth: 2, padding: 5}} onPress={ () => alert(JSON.stringify(this.state.descarte)) }>
            <Text>Discarte</Text>
          </ TouchableOpacity>
        </View>
        <Text>{ this.state.personagem }</Text>
      </View>
    );
  }
}