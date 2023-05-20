import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Home';
import LoginScreen from '../LoginScreen';
import StackNavigations from './StackNavigations';
import AppHome from '../AppHome';

const Drawer = createDrawerNavigator();

const DrawerNavigations = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="App Home" component={AppHome}/>
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Home" component={StackNavigations}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigations