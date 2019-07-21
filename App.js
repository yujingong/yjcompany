import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router  } from 'react-native-router-flux';
import GameList from './src/components/GameList'
import FleaCircus from './src/components/FleaCircus.js'
import {createStackNavigator, createAppContainer} from 'react-navigation'

// const Navigator = createStackNavigator({
//   Home: {screen: GameList},
//   FleaCircus: {screen: FleaCircus}
// })

export default function App() {
  return (
      <Router>
        <Scene key="root">
          <Scene key="gamelist" component={GameList} title="GameList"/>
          <Scene key="fleacircus" component={FleaCircus} title="FleaCircus"/>
        </Scene>
      </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
