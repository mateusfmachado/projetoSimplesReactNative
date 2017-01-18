import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Index from './app';
import Carta from './app/carta';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="index" component={Index} />
    <Scene key="carta" component={Carta} />
  </Scene>
);

class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

AppRegistry.registerComponent('projetoTeste', () => App);
