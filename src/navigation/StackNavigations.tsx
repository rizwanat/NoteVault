import { View, Text, StatusBar } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "../Counter";
import FlatListDemo from "../FlatListDemo";
import Home from "../Home";
import FlatListHome from "../FlatListHome";
import CounterHome from "../CounterHome";
import LoginScreen from "../LoginScreen";
import ProfileUpdate from "../ProfileUpdate";
import Profile from "../Profile";
import { SafeAreaView } from "react-native-safe-area-context";



const Stack = createNativeStackNavigator();

const StackNavigations = () => {
    
    return (
        // <SafeAreaView style={{flex:1}}>
        //     <StatusBar hidden />
            <Stack.Navigator>      
                        <Stack.Screen 
                            name="Home"
                            component={Home}
                        />
                        {/* <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                        /> */}
                        <Stack.Screen 
                            name="Counter Home"
                            component={CounterHome}
                        />
                        <Stack.Screen 
                            name="List Home"
                            component={FlatListHome}
                        />
                        <Stack.Screen 
                            name="Profile"
                            component={Profile}
                        />
                        <Stack.Screen 
                            name="Profile Update"
                            component={ProfileUpdate}
                        />
                        <Stack.Screen 
                            name="Counter"
                            component={Counter}
                        />
                        <Stack.Screen 
                            name="TodoList"
                            component={FlatListDemo}
                        />
            </Stack.Navigator>
        // </SafeAreaView>
    )
}

export default StackNavigations;