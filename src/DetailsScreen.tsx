import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React,{ useState } from 'react'

const DetailsScreen = ({route}:{route:any}) => {
    console.log(route.params);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>{route.params.item.title}</Text>
            </View>
            <View style={{display:'flex',flex:1,justifyContent:'flex-start',padding : 35}}>
                <Text style={styles.desc}>{route.params.item.desc}</Text>
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
        alignItems : 'flex-start',
        paddingLeft : 15,
        borderBottomWidth : 1,
        borderColor : 'black'
    },
    heading : {
        fontSize : 36,
        padding : 10,
        marginTop : 10,
        fontWeight : 'bold',
        color :'skyblue'
    },
    desc : {
      fontSize : 22,
      color : 'skyblue',
    }
})

export default DetailsScreen;