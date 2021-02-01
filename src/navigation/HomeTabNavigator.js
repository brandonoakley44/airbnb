import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import ExploreNavigator from '../navigation/ExploreNavigator';
import SearchResultsMap from '../screens/SearchResultsMap';
import PostScreen from '../screens/PostScreen';


import ProfileScreen from '../screens/Profile';



const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return(
       <Tab.Navigator tabBarOptions={{
           activeTintColor: "#f15454"
       }} >
           {/* Explore needs to display 2 components.. 
           turn this into stack navigator to be able to 
           display different screens
            */}
           <Tab.Screen name={"Explore"}
           component={ExploreNavigator}
           // component={SearchResultsMap}
           // component={PostScreen}
           options={{
               tabBarIcon: ({ color }) => (
                <Fontisto name="search" size={25} color={ color }  />
               )
           }}
           />
             <Tab.Screen name={"Saved"}
           component={HomeScreen}
           options={{
               tabBarIcon: ({ color }) => (
                <FontAwesome name="heart-o" size={25} color={color} />
               )
           }}
           />
             <Tab.Screen name={"Airbnb"}
           component={HomeScreen}
           options={{
               tabBarIcon: ({ color }) => (
                <FontAwesome5 name="airbnb" size={25} color={color} />
               )
           }}
           />
             <Tab.Screen name={"Messages"}
           component={HomeScreen}
           options={{
               tabBarIcon: ({ color }) => (
                <Feather name="message-square" size={25} color={color} />
               )
           }}
           />
             <Tab.Screen name={"Profile"}
           component={ProfileScreen}
           options={{
               tabBarIcon: ({ color }) => (
                <EvilIcons name="user" size={25} color={color} />
               )
           }}
           />
       </Tab.Navigator>
    );
}

export default HomeTabNavigator;