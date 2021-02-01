import React from 'react';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/index';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';
import GuestsScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';
import Post from '../components/DetailedPost';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
            <Stack.Screen name={"Home"} component={HomeTabNavigator}
                options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen}
                options={{
                    title: "Search your destination"
                }} />
                <Stack.Screen name={"Guests"} component={GuestsScreen}
                options={{
                    title: "How many People?"
                }} />
                <Stack.Screen name={"Post"} component={PostScreen}
                    options={{
                        title: "Accomodation"
                 }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 