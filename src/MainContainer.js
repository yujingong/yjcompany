import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import GameList from './components/GameList'
import FleaCircus from './components/FleaCircus'

const Navigator = createStackNavigator({
    Home: {screen: GameList},
    FleaCircus: {screen: FleaCircus}
})

const MainContainer = createAppContainer(Navigator)

export default MainContainer