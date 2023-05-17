import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'

const FlatListHome = ({navigation}:{navigation:any}) => {

    const [category,setCategory] = useState('');

    const handlePress = () => {
        console.log('cat in homescreen: ' + category);
        navigation.navigate('TodoList',{category});

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Home Page</Text>
            </View>
            <View style={{display:'flex',flex:1,justifyContent:'center'}}>
                <TextInput 
                    onChangeText={(newName) => {setCategory(newName)}}
                    placeholder='Name Your List...'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                />
                <View style={{
                    alignItems:'center'
                }}>
                    <Pressable style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={{
                            fontSize : 18,
                            fontWeight : '500',
                            color : 'skyblue',
                        }}>Todo List ➡️</Text>
			        </Pressable>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'darkblue'
    },
    header : {
        alignItems : 'center',
    },
    heading : {
        fontSize : 36,
        padding : 10,
        marginTop : 10,
        fontWeight : 'bold',
        color : 'skyblue'
    },
    input : {
        borderColor : 'skyblue',
        borderWidth : 2,
        padding: 10,
        paddingLeft : 20,
        margin : 10,
        marginHorizontal : 20,
        borderRadius : 10,
        color : 'skyblue',
        fontSize : 18,
    },
    button : {
		backgroundColor : 'darkblue',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 14,
		elevation : 10,
        margin : 15,
		marginBottom: 10,
		shadowColor:'white',
		shadowOpacity : 600,
        borderWidth : 2,
        borderColor : 'skyblue'

	},
})

export default FlatListHome
