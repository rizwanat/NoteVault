import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import React from 'react'

const Home = ({navigation}:{navigation:any}) => {

    const handleCounter = () =>{
        navigation.navigate('Counter');
    }

    const handleList = () =>{
        navigation.navigate('List');
    }

    const handleProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        
        <View style={{flex:1}}>
              
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome 😊</Text>
            </View>
            <View style={styles.container}>
                    <Pressable style={styles.button}
                    onPress={handleCounter}
                    >
                        <Text style={styles.text}>
                            Counter App
                        </Text>
                    </Pressable>
                    <Pressable style={styles.button}
                    onPress={handleList}
                    >
                        <Text style={styles.text}>
                            Todo App
                        </Text>
                    </Pressable>
                    <Pressable style={styles.button}
                    onPress={handleProfile}
                    >
                        <Text style={styles.text}>
                            Profile
                        </Text>
                    </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'darkblue',
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center'
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
    text : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'skyblue'
    },
    header : {
        alignItems : 'center',
        backgroundColor : 'darkblue'
    },
    heading : {
        fontSize : 36,
        padding : 10,
        marginTop : 10,
        fontWeight : 'bold',
        color : 'skyblue'
    },
});

export default Home