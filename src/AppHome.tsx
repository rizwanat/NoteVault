import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React,{ useState } from 'react'

const AppHome = ({navigation}:{navigation:any}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Home Page</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to My App Toco</Text>
            </View>
            {/* <Pressable style={styles.button}>
                <Text style={{
                    fontSize : 18,
                    fontWeight : '500',
                    color : 'skyblue',
                }}>Login ➡️</Text>
            </Pressable> */}
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