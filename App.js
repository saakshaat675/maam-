import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

import {Tab} from './components/AppTabNavigator'

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


export default function App() {
  return (
    <AppContainer/>



  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: Tab}
})

const AppContainer =  createAppContainer(switchNavigator)