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


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home/index';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index';
import GuestsScreen from './src/screens/Guests/index';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} />
        <Post post={post2} /> */}

        {/* <SearchResultsScreen /> */}

        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />

      </SafeAreaView>
    </>
  );
};



export default App;
