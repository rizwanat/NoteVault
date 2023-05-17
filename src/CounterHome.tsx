import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React,{ useState } from 'react'

const CounterHome = ({navigation}:{navigation:any}) => {

    const [name,setName] = useState('');
    const handleCounter = () =>{
        navigation.navigate('Counter',{name});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Home Page</Text>
            </View>
            <View style={{display:'flex',flex:1,justifyContent:'center'}}>
                <TextInput 
                    onChangeText={(newName) => {setName(newName)}}
                    placeholder='Enter your name...'
                    placeholderTextColor='skyblue'
                    style={styles.input}
                />
                <View style={{
                    alignItems:'center'
                }}>
                    <Pressable style={styles.button}
                    onPress={handleCounter} 
                    >
                        <Text style={{
                            fontSize : 18,
                            fontWeight : '500',
                            color : 'skyblue',
                        }}>Counter ➡️</Text>
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
        color :'skyblue'
    },
    input : {
        borderColor : 'skyblue',
        borderWidth : 2,
        padding: 10,
        paddingLeft : 20,
        margin : 10,
        marginHorizontal : 20,
        borderRadius : 15,
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

export default CounterHome