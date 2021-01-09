/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home/index';
import Router from './src/navigation/Router';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};



export default App;
