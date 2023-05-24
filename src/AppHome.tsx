import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React,{ useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppHome = ({navigation}:{navigation:any}) => {

    const handleButton = async () =>{
        const value = await AsyncStorage.getItem("isLoggedIn");
        const isLogged = JSON.parse(value);
        console.log("in home 1: ",isLogged);
        {isLogged ? navigation.navigate('DrawerStack') : navigation.navigate('SignUp')}
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Home Page</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to My App Toco</Text>
            </View>
            <Pressable style={styles.button}
                onPress={handleButton}
            >
                <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                }}>➡️</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'darkblue',
        justifyContent : 'center',
        alignItems : 'center'
    },
    header : {
        alignItems : 'center',
    },
    heading : {
        fontSize : 36,
        padding : 10,
        fontWeight : 'bold',
        color :'skyblue',
        textAlign :'center'
    },
    button : {
		backgroundColor : 'darkblue',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 14,
		elevation : 10,
        margin : 15,
		marginBottom: 10,
		shadowColor:'white',
		shadowOpacity : 600,
        borderWidth : 2,
        borderColor : 'skyblue',
	},
})

export default AppHome