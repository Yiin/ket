import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
    HomeScreen,
    SignsScreen,
} from './screens';

export default createStackNavigator({
    Home: { screen: HomeScreen },
    Signs: { screen: SignsScreen },
});
